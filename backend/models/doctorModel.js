const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        // Define doctor-specific fields here
        name: {
            type: String,
            required: true,
        },
        // Other doctor-specific fields...
    },
    { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
