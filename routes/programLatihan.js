const path = require('path');

const express = require('express');

const router = express.Router();

const detailProgramControllers = require('./../controllers/programLatihan/detailLatihan');

// login
router.get('/detail-olahraga', detailProgramControllers.getDetailProgram);

module.exports = router;