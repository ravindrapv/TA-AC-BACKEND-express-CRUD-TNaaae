var express = require('express');

var router = express.Router();

router.get('/',(req,res) => {
    res.send('welcome to userData info');
})


module.exports = router;