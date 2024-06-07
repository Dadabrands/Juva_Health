const Appointment = require('../models/appointmentModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Get all appointments with filtering, sorting, and pagination
exports.getAllAppointments = catchAsync(async (req, res, next) => {
    // Initialize query object
    let query = Appointment.find();

    // 1. Filtering - If there are query parameters for filtering
    if (req.query.filterByDate) {
        const filterDate = new Date(req.query.filterByDate);
        query = query.find({ 'appointments.preferredDate': filterDate });
    }

    // 2. Sorting - If there are query parameters for sorting
    if (req.query.sortByDate) {
        query = query.sort({ 'appointments.preferredDate': req.query.sortByDate });
    }

    // 3. Pagination - If there are query parameters for pagination
    const page = req.query.page * 1 || 1; // Convert string to number, default to 1
    const limit = req.query.limit * 1 || 10; // Convert string to number, default to 10
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    // Execute query
    const appointments = await query;

    res.status(200).json({
        status: 'success',
        results: appointments.length,
        data: { appointments },
    });
});


// Get single appointment
exports.getAppointment = catchAsync(async (req, res, next) => {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
        return next(new AppError('Appointment not found', 404));
    }

    res.status(200).json({
        status: 'success',
        data: { appointment },
    });
});

// Create appointment
exports.createAppointment = catchAsync(async (req, res, next) => {
    const appointment = (await Appointment.create(req.body)).populate({ patientId });

    res.status(201).json({
        status: 'success',
        data: { appointment },
    });
});

// Update appointment
exports.updateAppointment = catchAsync(async (req, res, next) => {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!appointment) {
        return next(new AppError('Appointment not found', 404));
    }

    res.status(200).json({
        status: 'success',
        data: { appointment },
    });
});

// Delete appointment
exports.deleteAppointment = catchAsync(async (req, res, next) => {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!appointment) {
        return next(new AppError('Appointment not found', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
});
