const router = require('express').Router();
const passport = require('passport');
const patientController = require('../../../controllers/api/v1/patientController');


//Routes for patient
router.post('/register', passport.authenticate('jwt', { session: false }), patientController.register);
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patientController.createReport);
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patientController.prevReports);


module.exports = router;