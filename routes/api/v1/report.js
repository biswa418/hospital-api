const router = require('express').Router();
const passport = require('passport');
const reportController = require('../../../controllers/api/v1/reportController');

//creating route for report

router.get('/:status', reportController.status);


module.exports = router;