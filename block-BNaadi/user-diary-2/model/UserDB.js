var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    email:String,
    age:Number,
    boi:String
},{timestamps:true});

var UserD = mongoose.model('UserD',userSchema);

module.exports = UserD;

