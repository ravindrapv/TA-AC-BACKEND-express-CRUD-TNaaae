var express = require('express');
const User = require('../models/userData');
var router = express.Router();

router.get('/',(req,res,next) => {
    User.find({}, (err,users) => {
        console.log(err,users);
        if(err) return next(err);
        res.render('users.ejs',{users: users});
    })
});


router.get('/new',(req,res) => {
    console.log('helllo');
    res.render('userForm.ejs')
})


router.post('/',(req,res,next) => {
    User.create(req.body,(err,createdUser) => {
        if(err) return next(err);
        res.redirect('user')
        console.log(err,createdUser)
    })
})


module.exports = router;