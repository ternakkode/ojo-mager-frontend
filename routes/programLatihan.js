const path = require('path');

const express = require('express');

const router = express.Router();

const detailProgramControllers = require('./../controllers/programLatihan/detailLatihan');
const listOlahragaControllers = require('./../controllers/programLatihan/listOlahraga');

// detail-olahraga
router.get('/detail-olahraga', detailProgramControllers.getDetailProgram);

// list-olahraga
router.get('/list-olahraga', listOlahragaControllers.getListProgram);

module.exports = router;