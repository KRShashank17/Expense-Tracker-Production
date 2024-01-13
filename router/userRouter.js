const express = require('express');
const {loginController, registerController} = require('../controller/userController');


const router = require('router');

    // Post | login
router.post('/login' , loginController)

    // Post | Register
router.post('/register' , registerController)

module.exports = router;