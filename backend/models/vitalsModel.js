const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    bloodPressure: {
        systolic: { type: Number, required: true },
        diastolic: { type: Number, required: true }
    },
    pulse: { type: Number, required: true },
    weight: { type: Number, required: true },
    height: { type: Number },
    temperature: { type: Number },
    bloodGlucoseLevel: { type: Number },
    respiratoryRate: { type: Number },
    bloodOxygen: { type: Number },
    sleepTime: { type: Number },
    allergies: [{ type: String }]
}, { timestamps: true });

const Vitals = mongoose.model('Vitals', vitalsSchema);
module.exports = Vitals;
