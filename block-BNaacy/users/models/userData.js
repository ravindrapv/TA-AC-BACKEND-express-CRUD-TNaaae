var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:String,
    description:String,
    age:Number,
    phoneNumber:Number,
    email:String,
},{timestamps:true});

var User = mongoose.model('User',userSchema);

module.exports = User;