const { Router } = require('express');
var express = require('express');

var router = express.Router();


router.get('/',(req,res) => {
    res.render('users',{users:["ravindra","venkata","ravindrapv","ravi"]});
});

router.get('/:id',(req,res) => {
    res.render('singleUser',{singelUser:{name:"ravindra",age:24}});
});

router.get('/new',(req,res) => {
    res.render('userForm');
});


module.exports = router;