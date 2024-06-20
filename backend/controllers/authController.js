const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const Patient = require("./../models/patientModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Email = require("./../utils/email");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (patient, statusCode, req, res) => {
  const token = signToken(patient._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  // Remove password from output
  patient.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      patient,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newPatient = await Patient.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const url = `${req.protocol}://${req.get("host")}/me`;
  // console.log(url);
  await new Email(newPatient, url).sendWelcome();

  createSendToken(newPatient, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }
  // 2) Check if patient exists && password is correct
  const patient = await Patient.findOne({ email }).select("+password");

  if (
    !patient ||
    !(await patient.correctPassword(password, patient.password))
  ) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // 3) If everything ok, send token to client
  createSendToken(patient, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if patient still exists
  const currentPatient = await Patient.findById(decoded.id);
  if (!currentPatient) {
    return next(
      new AppError(
        "The patient belonging to this token does no longer exist.",
        401
      )
    );
  }

  // 4) Check if patient changed password after the token was issued
  if (currentPatient.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        "patient recently changed password! Please log in again.",
        401
      )
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.patient = currentPatient;
  next();
});

// Only for rendered pages, no errors!
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if patient still exists
      const currentPatient = await Patient.findById(decoded.id);
      if (!currentPatient) {
        return next();
      }

      // 3) Check if patient changed password after the token was issued
      if (currentPatient.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN patient
      res.locals.patient = currentPatient;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'lead-guide']. role='patient'
    if (!roles.includes(req.patient.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get patient based on POSTed email
  const patient = await Patient.findOne({ email: req.body.email });
  if (!patient) {
    return next(new AppError("There is no patient with email address.", 404));
  }

  // 2) Generate the random reset token
  const resetToken = patient.createPasswordResetToken();
  await patient.save({ validateBeforeSave: false });

  // 3) Send it to patient's email
  try {
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/patients/resetPassword/${resetToken}`;
    await new Email(patient, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    patient.passwordResetToken = undefined;
    patient.passwordResetExpires = undefined;
    await patient.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get patient based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const patient = await Patient.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is patient, set the new password
  if (!patient) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  patient.password = req.body.password;
  patient.passwordConfirm = req.body.passwordConfirm;
  patient.passwordResetToken = undefined;
  patient.passwordResetExpires = undefined;
  await patient.save();

  // 3) Update changedPasswordAt property for the patient
  // 4) Log the patient in, send JWT
  createSendToken(patient, 200, req, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get patient from collection
  const patient = await Patient.findById(req.patient.id).select("+password");

  // 2) Check if POSTed current password is correct
  if (
    !(await patient.correctPassword(req.body.passwordCurrent, patient.password))
  ) {
    return next(new AppError("Your current password is wrong.", 401));
  }

  // 3) If so, update password
  patient.password = req.body.password;
  patient.passwordConfirm = req.body.passwordConfirm;
  await patient.save();
  // patient.findByIdAndUpdate will NOT work as intended!

  // 4) Log patient in, send JWT
  createSendToken(patient, 200, req, res);
});
