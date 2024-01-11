const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// dotenv config
require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.get('/' , (req, res)=>{
    res.send("Server is running...");
})

const PORT = 8000 || process.env.PORT;

app.listen(PORT , ()=>{
    console.log(`Server started on port ${PORT}`.green.bold);
})