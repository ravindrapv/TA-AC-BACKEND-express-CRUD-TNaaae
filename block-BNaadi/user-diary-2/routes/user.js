var express = require('express');
const { model } = require('mongoose');
var router = express.Router();
var UserD = require('../model/UserDB');


router.get('/',(req,res) => {
    res.render('user.ejs')
});

router.get('/new',(req,res,next) => {
    UserD.create(req.body,(err, createdUser) => {
        if(err) return next(err,createdUser);
        res.send('user data saved')
    })
})


module.exports = router;