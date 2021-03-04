const path = require('path');

const express = require('express');

const router = express.Router();

const regisController = require('./../controllers/register/register');


router.get('/registrasi', regisController.getRegister);
router.post('/register', regisController.postRegister);

module.exports = router;