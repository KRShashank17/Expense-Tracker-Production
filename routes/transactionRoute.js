const express = require('express');
const { addTransaction, getAllTransaction , editTransaction} = require('../controller/transactionCtrl');
const router = express.Router();

router.post('/add-transaction', addTransaction);
router.post('/get-transaction', getAllTransaction);

router.post('/edit-transaction', editTransaction);

module.exports = router;