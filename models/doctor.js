const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    patient: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;

