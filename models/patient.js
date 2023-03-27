const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    report: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report',
    }]
},
    {
        timestamps: true
    }
);

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;

