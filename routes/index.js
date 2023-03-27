const router = require('express').Router();

router.get('/', function (req, res) { res.end('<h1> Hello world </h1>'); });
router.use('/api', require('./api'));

module.exports = router;