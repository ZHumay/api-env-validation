const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    password:Number
})

const User=mongoose.model('User',userSchema);
module.exports={
    User
}