const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    status: {
        type: String,
        required: true,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    }
},
    {
        timestamps: true
    }
);

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;

