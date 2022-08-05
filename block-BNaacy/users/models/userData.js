var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:{type:String,requerd:true},
    description:String,
    age:Number,
    phoneNumber:Number,
    email:{type:String,requerd:true}
},{timestamps:true});

var User = mongoose.model('User',userSchema);

module.exports = User;