var express = require('express');
const User = require('../models/userData');
var router = express.Router();

router.get('/',(req,res) => {
    res.send('welcome to userData info');
});


module.exports = router;