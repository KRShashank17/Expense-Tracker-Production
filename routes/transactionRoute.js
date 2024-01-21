const express = require('express');
const { addTransaction, getAllTransaction } = require('../controller/transactionCtrl');
const router = express.Router();

router.post('/add-transaction', addTransaction);
router.get('/get-transaction', getAllTransaction);

module.exports = router;