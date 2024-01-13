const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : string, 
        required: true
    },

    email : {
        type : string,
        required : [true , "Must fill and should be unique"],
        unique : true
    },

    password : {
        type : string,
        required : [true , "Must fill"]
    }


}, {timestamps : true})

const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;