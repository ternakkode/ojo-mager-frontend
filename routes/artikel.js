const path = require('path');

const express = require('express');

const router = express.Router();

// const loginController = require('./../controllers/login/login');

// artikel
router.get('/artikel',  (req, res) => {
    res.render('artikel/artikel');
});

module.exports = router;