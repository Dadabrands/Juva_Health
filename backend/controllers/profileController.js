const Profile = require('../models/profileModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Get single profile
exports.getProfile = catchAsync(async (req, res, next) => {
    try {
        // Extract patient ID and profile ID from request parameters
        const { patientId, id } = req.params;

        // Retrieve the profile to check if it belongs to the patient
        const profile = await Profile.findOne({ _id: id, patient: patientId });

        // If profile doesn't exist or doesn't belong to the patient, return error
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found for this patient' });
        }

        // Success response
        res.status(200).json({
            status: 'success',
            data: { profile },
        });
    } catch (err) {
        // Error handling
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});



// // Get all profiles
exports.getAllProfiles = catchAsync(async (req, res, next) => {
    const profiles = await Profile.find();

    res.status(200).json({
        status: 'success',
        results: profiles.length,
        data: { profiles },
    });
});


// create profile
exports.createProfile = catchAsync(async (req, res, next) => {
    try {
        // Extract patient ID from request parameters
        const patientId = req.params.patientId;

        // Check if the patient already has a profile
        const existingProfile = await Profile.findOne({ patient: patientId });

        if (existingProfile) {
            return res.status(400).json({ error: 'Patient already has a profile' });
        }

        // Include patient ID directly in the request body
        req.body = { patient: req.params.patientId, ...req.body }; // Merge patientId into the request body

        // Create the profile
        const profile = await Profile.create(req.body);

        res.status(201).json({
            status: 'success',
            data: { profile },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});


// Update profile
exports.updateProfile = catchAsync(async (req, res, next) => {
    try {
        // Extract patient ID and profile ID from request parameters
        const { patientId, id } = req.params;

        // Retrieve the profile to check if it belongs to the patient
        const profile = await Profile.findOne({ _id: id, patient: patientId });

        // If profile doesn't exist or doesn't belong to the patient, return error
        if (!profile) {
            return res.status(403).json({ error: 'You are not authorized to update this profile' });
        }

        // Update the profile
        const updatedProfile = await Profile.findByIdAndUpdate(
            id, // Find profile by ID
            req.body, // Update with request body data
            { new: true, runValidators: true } // Options: return updated profile, run validators
        );

        // Success response
        res.status(200).json({
            status: 'success',
            data: { profile: updatedProfile },
        });
    } catch (err) {
        // Error handling
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete profile
exports.deleteProfile = catchAsync(async (req, res, next) => {
    const profile = await Profile.findByIdAndDelete(req.params.id);

    if (!profile) {
        return next(new AppError('Profile not found', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
});

