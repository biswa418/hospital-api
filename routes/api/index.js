const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.end('Inside api');
});


module.exports = router;