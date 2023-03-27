const router = require('express').Router();

console.log('Started routing');
router.use('/api', require('./api'));

module.exports = router;