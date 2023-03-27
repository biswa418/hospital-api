const Report = require('../../../models/report');

//show all report status
module.exports.status = async function (req, res) {
    let status = req.params.status;

    try {
        //find all the report by filtering the status
        let report = await Report.find({ status: status }).populate('patient');

        //return response with populated patient
        return res.status(200).json({
            message: `Patient with status ${status}`,
            data: {
                report
            }
        });

    } catch (err) {
        return res.status(500).json({
            message: 'Patient could not be found!',
            data: {
            }
        });
    }
}