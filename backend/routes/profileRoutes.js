const express = require('express');
const {
    getAllProfiles,
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile,
} = require('../controllers/profileController');

const router = express.Router({ mergeParams: true });

// Update a patient profile
router.route('/:patientId/:id').patch(updateProfile).get(getProfile);

// Create a new profile
router.route('/:patientId/profile').post(createProfile);

// Get All profile
router.route('/').get(getAllProfiles);

// Delete a profile by ID
router.route('/:id').delete(deleteProfile);


module.exports = router;
