const programsRoute = require('express').Router();
const Program = require('../api/Program');
const ProgramType = require('../api/ProgramType');
const timeUtils = require('../utils/time');
const stringUtils = require('../utils/string');
const isLogin = require('../middleware/isLogin');
const isVerified = require('../middleware/isVerified');

programsRoute.get('/program', isLogin, isVerified, async (req, res) => {
    const { title, type, page } = req.query;
    console.log('sampe sini');
    const programApi = new Program();

    let programs = [];
    await programApi.getPrograms(title, type, null, 9, true, page).then(res => {
        programs = res.data.data;
    }).catch(err => {

    });

    const programTypeApi = new ProgramType();

    let programTypes = [];
    await programTypeApi.getProgramTypes().then(res => {
        programTypes = res.data.data;
    }).catch(err => {

    });

    res.render('programs/index', {
        programs, 
        programTypes,
        parseSecond: timeUtils.parseSecond,
        truncateString: stringUtils.truncateString
    });
});

programsRoute.get('/program/:slug', isLogin, isVerified, async (req, res) => {
    const { slug } = req.params;
    const token = req.cookies.jwt_token;

    const programApi = new Program();

    let program = null;
    await programApi.getProgram(token, slug).then(res => {
        program = res.data.data;
    }).catch(err => {
        return res.redirect('/')
    });

    let randomProgram = [];
    await programApi.getPrograms(null, null, true, 6).then(res => {
        randomProgram = res.data.data;
    }).catch(err => {

    })

    res.render('programs/detail', { 
        program, 
        randomProgram,
        parseSecond: timeUtils.parseSecond,
        truncateString: stringUtils.truncateString
    });
});

module.exports = programsRoute;