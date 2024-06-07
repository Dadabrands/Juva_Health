const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
    {
        // Define admin-specific fields here
        name: {
            type: String,
            required: true,
        },
        // Other admin-specific fields...
    },
    { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
