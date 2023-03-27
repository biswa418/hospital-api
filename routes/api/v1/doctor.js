const router = require('express').Router();
const doctorController = require('../../../controllers/api/v1/doctorController');

router.post('/register', doctorController.register);
router.post('/login', doctorController.login);


module.exports = router;