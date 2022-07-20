var express = require('express');
var mongoose = require('mongoose');
var ejs = require('ejs');
var path = require('path');
var mongodb = require('./module/schoolDB');

var Schema = mongoose.Schema;
var app = express();

app.use(express.json());
app.set("viwe engine","ejs");
app.set("viwe",path.join(__dirname,"viwes"));

app.get('/',(req,res) => {
   res.render('index.ejs');
});
 
app.listen(3000,() => {
    console.log('server is is listing on port 3k');
})

