const mongoose = require('mongoose');

// Custom validator to limit reason field to 100 words
const validateReasonLength = function (reason) {
    const wordCount = reason.trim().split(/\s+/).length;
    return wordCount <= 100;
};

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },

    bookedForSelf: { type: Boolean, required: true },
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true },
    consultationMethod: { type: String, enum: ['message', 'chat', 'audio', 'video'], required: true },
    reason: {
        type: String,
        required: true,
        validate: [validateReasonLength, 'Reason cannot exceed 100 words']
    },
    currentMedication: String,
    uploadedFiles: [String],
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    // Payment Info
    payment: {
        currency: { type: String, enum: ['NGN', 'USD', 'EUR', 'GBP'], default: 'NGN', required: true },
        paymentMethod: { type: String, enum: ['card', 'bank_transfer', 'ussd'], required: true },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
        },
        billingAddress: {
            country: String,
            address1: String,
            address2: String,
            postalCode: String,
        },
        transactionSummary: {
            consultationFee: { type: Number, required: true },
            total: { type: Number, required: true },
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },
    }
}, { timestamps: true });

// Check the validity of appointments before saving
// appointmentSchema.pre('save', function (next) {
//     const currentDate = new Date();
//     this.appointments.forEach(appointment => {
//         // Check if preferred date has already passed
//         if (appointment.preferredDate < currentDate) {
//             appointment.status = 'cancelled'; // Mark appointment as cancelled
//         }
//     });
//     next();
// });
appointmentSchema.pre('save', function (next) {
    const currentDate = new Date();
    if (this.preferredDate < currentDate) {
        this.status = 'cancelled'; // Mark appointment as cancelled
    }
    next();
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
