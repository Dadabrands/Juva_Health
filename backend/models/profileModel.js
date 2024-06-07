const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    // User Information
    profilePic: String,
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: String,
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["male", "female", "others"], required: true },
    profession: String,
    genotype: String,
    bloodGroup: String,

    // Next of Kin Information
    nextOfKin: {
        name: { type: String, required: true },
        address: String,
        relationship: String,
    },

    // Insurance Information
    insurance: {
        company: String,
        customerReferenceNumber: String,
        policyId: String,
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
