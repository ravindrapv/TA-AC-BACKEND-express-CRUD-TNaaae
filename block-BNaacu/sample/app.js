var express = require('express');
var app = express()

app.get('/',(req,res) => {
    res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
})

app.get('/',(req,res) => {
    res.render("studentDetail", {
        student: { name: "rahul", email: "rahul@altcampus.io" },
      });
})



app.listen(3000,() => {
    console.log("server is listing on port 3k");
})