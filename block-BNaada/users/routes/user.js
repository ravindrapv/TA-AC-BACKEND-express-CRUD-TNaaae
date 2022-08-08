var express = require('express');
const User = require('../models/userData');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/',(req,res) => {
    res.send('user saved');
});


router.get('/new',(req,res) => {
    console.log('helllo');
    res.render('userForm')
})


router.post('/',(req,res,next) => {
    User.create(req.body,(err,createdUser) => {
        if(err) return next(err);
        res.redirect('user')
        console.log(err,createdUser)
    })
})


module.exports = router;