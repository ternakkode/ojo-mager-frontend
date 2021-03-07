const path = require('path');

const express = require('express');

const router = express.Router();

const loginController = require('./../controllers/login/login');

// login
router.get('/login', loginController.getLogin);
router.post('/login', loginController.postLogin);
// verification
router.get('/verification', loginController.getVerification);
// forgot password
router.get('/forgot-password', loginController.getForgotPassword);
router.post('/forgot-password', loginController.postForgotPassword);

// change password
router.get('/change-password', loginController.getChangePassword);

module.exports = router;