var express = require('express');
 var app = express();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/usersData',{useNewparser:true,useUniedTopologe:true},(err) => {
    console.log("connected",err ? false : true);
});

app.get('./',(req,res) => {
    res.send("welcome")
})
app.use((req,res,next) => {
    res.send('page not found')
})
app.listen(3000,() => {
    console.log("server is listing on port 3000");
})






