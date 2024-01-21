const transactionModel = require('../models/transactionModel');

const addTransaction = async(req, res)=>{
    try {
        const transaction = new transactionModel(req.body);
        await transaction.save();

        res.status(201).send("Transaction Created");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getAllTransaction = async(req,res)=>{
    try {
        const transactions = await transactionModel.find({});
        res.status(200).json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {addTransaction, getAllTransaction}