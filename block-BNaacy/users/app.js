var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");

var indexRouter = require("./routes/index");

mongoose.connect(
  "mongodb://localhost/usersData",
  (err) => {
    console.log("connected", err ? false : true);
  }
);

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "view"));

//routing miidelwers
app.use("/", indexRouter);
//error handeler

app.use((req, res, next) => {
  res.send("page  not found");
});
app.listen(3000, () => {
  console.log("server is listing on port 3000");
});
