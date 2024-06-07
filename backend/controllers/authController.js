const crypto = require('node:crypto');
const { promisify } = require('node:util');
const jwt = require('jsonwebtoken');
const Patient = require('../models/patientModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');

const signToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

// const createSendToken = (patient, statusCode, res) => {
//     const cookieOptions = {
//         expires: new Date(
//             Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//         ),
//         // secure: true, //only while using https
//         httpOnly: true, //Cannot be accessed/modified by the  browser
//     };

//     if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
//     const token = signToken(patient._id);
//     res.cookie('jwt', token, cookieOptions);
//     // Removes password from the output
//     patient.password = undefined;
//     return res.status(statusCode).json({
//         status: `Success`,
//         token,
//         data: {
//             patient,
//         },
//     });
// };

const createSendToken = (patient, statusCode, res) => {
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        // secure: true, //only while using https
        httpOnly: true, //Cannot be accessed/modified by the browser
    };

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    const token = signToken(patient._id);
    res.cookie('jwt', token, cookieOptions);
    // Removes password from the output
    patient.password = undefined;

    // Set the token in the response headers
    res.setHeader('Authorization', `Bearer ${token}`); // Add this line

    // Return the response with the token in the headers
    return res.status(statusCode).json({
        status: `Success`,
        token,
        data: {
            patient,
        },
    });
};

const signup = catchAsync(async (req, res, next) => {
    const newPatient = await Patient.create({
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: req.body.role,
    });
    createSendToken(newPatient, 201, res);
});

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    //1 Check if email && password exists
    if (!email || !password)
        return next(new AppError(`Please provide email and password!`, 400));
    //2 Check if patient exists && password is correct

    const patient = await Patient.findOne({ email }).select('+password');
    if (!patient || !(await patient.correctPassword(password, patient.password)))
        return next(new AppError(`Incorrect email or password`, 401));

    //3 If everything is okay, send jwtoken to client
    createSendToken(patient, 200, res);
});

// const protect = catchAsync(async (req, res, next) => {
//     //1. Get token and check if it's there
//     let token;
//     if (
//         req.headers.authorization &&
//         req.headers.authorization.startsWith('Bearer')
//     ) {
//         token = req.headers.authorization.split(' ')[1];
//     }

//     // console.log(token);
//     if (!token) {
//         return next(new AppError(`Unauthorized, please log in to get access`, 401));
//     }
//     //2. Validate the token
//     const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
//     //3 Check if user still exists
//     const currentPatient = await Patient.findById(decoded.id);
//     if (!currentPatient)
//         return next(
//             new AppError(`The patient assigned to this user token does not exist!`, 401)
//         );

//     //4 Check if user changed password after jwt/token was issued
//     if (currentPatient.changePasswordAfter(decoded.iat)) {
//         return next(
//             new AppError(`User recently changed password, please login again`, 401)
//         );
//     }
//     // Grant Access To Protected Route
//     req.patient = currentPatient;
//     next();
// });

const protect = catchAsync(async (req, res, next) => {
    // Get token from the request headers
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError(`Unauthorized, please log in to get access`, 401));
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the token is about to expire (e.g., within 30 seconds)
        if (decoded.exp - Date.now() / 1000 < 30) {
            // If token is about to expire, generate a new token
            const currentPatient = await Patient.findById(decoded.id);

            // Check if user still exists
            if (!currentPatient) {
                return next(new AppError(`The patient assigned to this user token does not exist!`, 401));
            }

            // Check if user changed password after token was issued
            if (currentPatient.changePasswordAfter(decoded.iat)) {
                return next(new AppError(`User recently changed password, please login again`, 401));
            }

            // Generate a new token
            const newToken = signToken(currentPatient._id);

            // Set the new token in the response cookie
            const cookieOptions = {
                expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };
            if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
            res.cookie('jwt', newToken, cookieOptions);
        }

        // Grant access to protected route
        req.patient = decoded;
        next();
    } catch (err) {
        return next(new AppError(`Invalid token, please log in again`, 401));
    }
});

const restrictTo = (...roles) =>
    catchAsync(async (req, res, next) => {
        // roles ['admin', 'lead-guide']. role='patient'
        if (!roles.includes(req.patient.role)) {
            console.log(req);
            return next(
                new AppError('You do not have permission to perform this action', 403)
            );
        }

        next();
    });

const forgotPassword = catchAsync(async (req, res, next) => {
    //1. Get patient based on posted email
    const patient = await Patient.findOne({ email: req.body.email });
    if (!patient) {
        return next(new AppError(`There is no patient with this email address`), 404);
    }
    //2. Generate the Random  reset Token
    const resetToken = patient.createPasswordResetToken();
    await patient.save({ validateBeforeSave: false });

    //3.Send it to user's email
    const resetURL = `${req.protocol}://${req.get(
        'host'
    )}/api/v1/patient/resetPassword/${resetToken}`;
    const message = `Forgot your password? Submit a request with your new password and password Confirm to : ${resetURL}.\nIf you didn't forget your password, please ignore this email`;

    try {
        await sendEmail({
            email: patient.email, //Or req.body.email
            subject: `Your password reset token - Valid for 10mins`,
            message,
        });

        res.status(200).json({
            status: `Success`,
            message: `Token sent`,
        });
    } catch (err) {
        patient.passwordResetToken = undefined;
        patient.passwordResetExpires = undefined;
        await patient.save({ validateBeforeSave: false });
        return next(
            new AppError(`There was an Error sending the email. Try again later`),
            500
        );
    }
});

const resetPassword = catchAsync(async (req, res, next) => {
    //1. Get user based on the token
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const patient = await Patient.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });

    //2 If token has not expired and there is user, set the new password
    if (!patient) {
        return next(new AppError(`Token is Invalid or has expired`), 400);
    }
    patient.password = req.body.password;
    patient.passwordConfirm = req.body.passwordConfirm;
    patient.passwordResetToken = undefined;
    patient.passwordResetExpires = undefined;
    await patient.save();

    //3 Update changePaswordAt property of the user
    //4 Log the user in, send JWT to client(user)
    createSendToken(patient, 200, res);
});

const updatePassword = catchAsync(async (req, res, next) => {
    //1. Get user from the collection
    const patient = await Patient.findById(req.patient.id).select('+password');
    //2 Check if POSTed current password is coreect
    if (!(await patient.correctPassword(req.body.passwordCurrent, patient.password))) {
        return next(new AppError(`Your current password is wrong.`, 401));
    }
    //3 If so, update password
    patient.password = req.body.password;
    patient.passwordConfirm = req.body.passwordConfirm;
    await patient.save();
    //N.b User.findByIdAndUpdate will not work as intended!!!
    //4 Log user in , send JWT
    createSendToken(patient, 200, res);
});

const logout = (req, res) => {
    // IMPLEMENT IT TO WORK WITH PROTECT MIDDLEWARE IN THE FUTURE
    // Set an empty JWT token with an expired expiration date to clear the token from the client's cookies
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000), // Expire after 10 seconds
        httpOnly: true,
    });

    // Send JSON response indicating successful logout
    res.status(200).json({
        status: 'success',
        message: 'Patient logged out successfully.',
    });
};

module.exports = {
    signup,
    login,
    protect,
    restrictTo,
    forgotPassword,
    resetPassword,
    updatePassword,
    logout
};