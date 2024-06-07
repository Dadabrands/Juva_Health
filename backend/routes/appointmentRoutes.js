const express = require('express');
const {
    getAllAppointments,
    getAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment,
} = require('../controllers/appointmentController');

const router = express.Router();

// Routes for appointments
router.route('/')
    .get(getAllAppointments) // Get all appointments with filtering, sorting, and pagination
    .post(createAppointment); // Create a new appointment

router.route('/:id')
    .get(getAppointment) // Get a single appointment by ID
    .patch(updateAppointment) // Update an appointment by ID
    .delete(deleteAppointment); // Delete an appointment by ID

module.exports = router;
