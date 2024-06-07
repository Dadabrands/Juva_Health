const express = require('express');
const {
    getAllVitals,
    getVitalsById,
    createVitals,
    updateVitals,
    deleteVitals,
} = require('../controllers/vitalsController');

const router = express.Router({ mergeParams: true });

// Update vitals
router.route('/:patientId/:id').patch(updateVitals).get(getVitalsById);

// Create new vitals
router.route('/:patientId/vitals').post(createVitals);

// Get all vitals
router.route('/').get(getAllVitals);

// Delete vitals
router.route('/:id').delete(deleteVitals);

module.exports = router;
