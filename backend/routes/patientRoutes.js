const express = require('express');
const {
  getAllPatients,
  getPatient,
  updatePatient,
  deletePatient,
  updateEmail, deleteMe
} = require('../controllers/patientController');
const { signup, login, forgotPassword, resetPassword, logout, updatePassword, protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

// Authentication routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/updateMyPassword', protect, updatePassword);
router.patch('/updateEmail', protect, updateEmail);
router.delete('/deleteMe', protect, deleteMe);
router.post('/logout',
  // protect, 
  logout);

// Patient routes
router.route('/').get(protect, getAllPatients); // Protect the route to get all patients
router.route('/:id').get(protect, getPatient).put(protect, updatePatient).delete(protect, restrictTo("admin"), deletePatient); // Protect individual patient routes
module.exports = router;






