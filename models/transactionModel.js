const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema( {
    userid : {
        type : String, 
        required : true
    },
    amount :{
        type : Number,
        required : [true, "amount required"]
    },
    type : {
        type : String, 
        required : [true , "type is required"]
    },
    category : {
        type : String , 
        required : [true, "category required"]
    },
    reference : {
        type : String
    },
    description : {
        type : String,
        required : [true, "description required"]
    },
    date : {
        type : Date,
        required : [true, "date is required"]
    }
},{timestamps: true})

const transactionModel = mongoose.model('Transactions', transactionSchema);

module.exports = transactionModel