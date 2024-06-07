const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('node:crypto');
const bcrypt = require('bcryptjs');

const patientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'A user must have an email address'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    role: {
        type: String,
        enum: ['admin', 'patient', 'doctor'],
        default: 'patient',
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        minlength: 8,
        validate: {
            //This only works on Create & Save
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!',
        },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', select: false },
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', select: false }],
    vitals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vitals', select: false }]
}, { timestamps: true });



patientSchema.pre('save', async function (next) {
    // only run this function if password is modified
    if (!this.isModified('password')) return next();
    //Hash the password with cost parameter of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Log the hashed password
    // console.log('Hashed password:', this.password);

    //Deletes the passwordConfirm field
    this.passwordConfirm = undefined;
    next();
});

patientSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000;
    next();
});

// patientSchema.pre('save', function (next) {
//     // Set profile, appointments, and vitals fields to undefined
//     this.profile = undefined;
//     this.appointments = undefined;
//     this.vitals = undefined;
//     next();
// });

patientSchema.pre(/^find/, function (next) {
    // this points to the current quer
    this.find({ active: { $ne: false } })

    next();
});



//instance methods
patientSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

patientSchema.methods.changePasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        console.log(changedTimestamp, JWTTimestamp);
        return JWTTimestamp < changedTimestamp;
    }
    // False means not changed
    return false;
};

patientSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    console.log({ resetToken }, this.passwordResetToken);
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    //We're sending back the unencrypted reset token.
    return resetToken;
};

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;