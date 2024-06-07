const Vitals = require('../models/vitalsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Get single vitals
exports.getVitalsById = catchAsync(async (req, res, next) => {
    try {
        // Extract patient ID and vitals ID from request parameters
        const { patientId, id } = req.params;

        // Retrieve the vitals to check if it belongs to the patient
        const vitals = await Vitals.findOne({ _id: id, patient: patientId });

        // If vitals doesn't exist or doesn't belong to the patient, return error
        if (!vitals) {
            return res.status(404).json({ error: 'Vitals not found for this patient' });
        }

        // Success response
        res.status(200).json({
            status: 'success',
            data: { vitals },
        });
    } catch (err) {
        // Error handling
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all Vitals
exports.getAllVitals = catchAsync(async (req, res, next) => {
    const vitals = await Vitals.find();

    res.status(200).json({
        status: 'success',
        results: vitals.length,
        data: { vitals },
    });
});

// Create Vitals
exports.createVitals = catchAsync(async (req, res, next) => {
    try {
        // Extract patient ID from request parameters
        const patientId = req.params.patientId;

        // Check if the patient already has a vitals
        const existingVitals = await Vitals.findOne({ patient: patientId });

        if (existingVitals) {
            return res.status(400).json({ error: 'Patient already has vitals' });
        }

        // Include patient ID directly in the request body
        req.body = { patient: req.params.patientId, ...req.body }; // Merge patientId into the request body

        // Create the profile
        const vitals = await Vitals.create(req.body);


        res.status(201).json({
            status: 'success',
            data: { vitals },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Update Vitals
exports.updateVitals = catchAsync(async (req, res, next) => {
    try {
        // Extract patient ID and vitals ID from request parameters
        const { patientId, id } = req.params;

        // Retrieve the vitals to check if it belongs to the patient
        const vitals = await Vitals.findOne({ _id: id, patient: patientId });

        // If vitals doesn't exist or doesn't belong to the patient, return error
        if (!vitals) {
            return res.status(403).json({ error: 'You are not authorized to update this vitals' });
        }

        // Update the vitals
        const updatedVitals = await Vitals.findByIdAndUpdate(
            id, // Find vitals by ID
            req.body, // Update with request body data
            { new: true, runValidators: true } // Options: return updated vitals, run validators
        );

        // Success response
        res.status(200).json({
            status: 'success',
            data: { vitals: updatedVitals },
        });
    } catch (err) {
        // Error handling
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete Vitals
exports.deleteVitals = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const deletedVitals = await Vitals.findByIdAndDelete(id);
    if (!deletedVitals) {
        return res.status(404).json({ error: 'Vitals record not found' });
    }
    res.json({ message: 'Vitals record deleted successfully' });
});
