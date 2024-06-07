const Patient = require('../models/patientModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


// function that takes care of Filtering object we want in the update field
const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
};

// Get all patients
exports.getAllPatients = catchAsync(async (req, res, next) => {
    const patients = await Patient.find();

    // Send response
    res.status(200).json({
        status: 'success',
        results: patients.length,
        data: { patients },
    });
});

// Get single patient
exports.getPatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findById(req.params.id);

    // Check if patient exists
    if (!patient) {
        return next(new AppError('Patient not found', 404));
    }

    // Send response
    res.status(200).json({
        status: 'success',
        data: { patient },
    });
});

// Create a patient
// exports.createPatient = catchAsync(async (req, res, next) => {
//     // const patient = await Patient.create(req.body)
//     const patient = await Patient.findOne({ email, role }).select('-profile -appointments -vitals');


//     // Send response
//     res.status(201).json({
//         status: 'success',
//         data: { patient },
//     });
// });

// Update a patient
exports.updatePatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated patient
        runValidators: true, // Run validators on update
    });

    // Check if patient exists
    if (!patient) {
        return next(new AppError('Patient not found', 404));
    }

    // Send response
    res.status(200).json({
        status: 'success',
        data: { patient },
    });
});

// Delete a patient
exports.deletePatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findByIdAndDelete(req.params.id);

    // Check if patient exists
    if (!patient) {
        return next(new AppError('Patient not found', 404));
    }

    // Send response
    res.status(204).json({
        status: 'success',
        data: null, // No content to send back
    });
});
// Delete Me
exports.deleteMe = catchAsync(async (req, res, next) => {
    await Patient.findByIdAndUpdate(req.patient.id, { active: false });

    // Send response
    res.status(204).json({
        status: 'success',
        data: null, // No content to send back
    });
});

// Update Patient Email
exports.updateEmail = catchAsync(async (req, res, next) => {
    // Create error if the user POSts password data

    if (req.body.password || req.body.passwordConfirm) {
        return next(new AppError('This route is not for password updates Please use /updateMyPassword', 400));
    }
    // Retrieve the current user's ID from the request object
    const patientId = req.patient.id;

    // Retrieve the new email from the request body
    const { email } = req.body;

    // Check if the email is provided in the request body
    if (!email) {
        return next(new AppError('Email is required for updating', 400));
    }
    // Check if the new email is the same as the old email
    const patient = await Patient.findById(patientId);
    if (patient.email === email) {
        return next(new AppError('New email must be different from the current email', 400));
    }

    // Filter out unwanted fields name that are not allowed to be updated 
    const filteredBody = filterObj(req.body, "email")

    // Find the user by ID and update the email
    const updatedPatient = await Patient.findByIdAndUpdate(
        patientId,
        filteredBody,
        {
            new: true, // Return the updated user
            runValidators: true, // Run validators on update
        }
    );

    // Check if the user exists
    if (!updatedPatient) {
        return next(new AppError('Patient not found', 404));
    }

    // Send response
    res.status(200).json({
        status: 'success',
        data: { user: updatedPatient },
    });
});
