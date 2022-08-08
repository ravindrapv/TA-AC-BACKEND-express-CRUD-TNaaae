var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");

var indexRouter = require("./routes/user");

mongoose.connect(
    "mongodb://localhost/userDiary",
    {
      useNewurlparser: true,
      useunifiedtopology: true,
    },
    (err) => {
      console.log("connected", err ? false : true);
    }
  );
app.use(express.urlencoded({ extended: false }));
  
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
// app.set("view", path.join(__dirname, "view"));

//routing miidelwers
app.use("/user", indexRouter);


//error handeler

app.use((req, res, next) => {
  res.send("page  not found");
});
app.listen(3000, () => {
  console.log("server is listing on port 3000");
});
