const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const Doctor = require('../../../models/doctor');

//register the patients first
module.exports.register = async function (req, res) {
    try {
        //find if already exist
        let patient = await Patient.findOne({ phone: req.body.phone });

        //if exists return the details of the patient or create it
        if (patient) {
            return res.status(200).json({
                message: 'Patient already exists!',
                data: {
                    patient: patient
                }
            });
        } else {
            patient = await Patient.create({
                doctor: req.user._id,
                name: req.body.name,
                phone: req.body.phone
            });

            req.user.patient.push(patient._id);
            //change the doctor-patient relationship as well - to maintain who treated this patient
            await Doctor.findOneAndUpdate({ username: req.user.username }, {
                patient: req.user.patient
            });

            //return response after everything is updated
            return res.status(200).json({
                message: 'Patient registered!',
                data: {
                    patient
                }
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error!',
            data: {

            }
        });
    }
}

//show all previous report
module.exports.prevReports = async function (req, res) {
    try {
        let patient = await Patient.findById(req.params.id).populate({
            path: 'report',
            options: { sort: { createdAt: -1 } },
        });

        if (patient) {
            return res.status(200).json({
                message: `Reports for patient ${patient.name}`,
                data: {
                    reports: patient.report
                }
            });
        }

    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            data: {
            }
        });
    }
}

//create report of a patient
module.exports.createReport = async function (req, res) {
    try {
        //find the patient
        let patient = await Patient.findById(req.params.id);

        if (patient) {
            try {
                //create the report
                let report = await Report.create({
                    doctor: req.user._id,
                    status: req.body.status,
                    patient: patient._id
                });

                //update it in the patient as well
                patient.report.push(report._id);
                await Patient.findOneAndUpdate({ phone: patient.phone }, {
                    report: patient.report
                });

                //return the report created and response
                return res.status(200).json({
                    message: 'Report Created',
                    data: {
                        report
                    }
                });
            } catch (err) {
                res.status(500).json({
                    message: 'Could not create the report',
                    data: {
                        patient
                    }
                });
            }
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Patient could not be found!',
            data: {
            }
        });
    }
}