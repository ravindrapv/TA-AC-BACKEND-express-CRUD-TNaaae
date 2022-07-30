var express = require('express');
var app = express();
var usersData = require('./usersRouter/users');
var path = require('path');
app.use(express.json());

//midelwers
app.set('view engine','ejs')
app.set('views',path.join(__dirname ,'views'))


app.get('/',(req,res) => {
    res.render('index');
})

app.get('/users',usersData)

app.use((req,res,next) => {
    res.status(404).send("page not found");
    next()
});

app.listen(3000,() => {
    console.log("the server is listing on port 3k")
});