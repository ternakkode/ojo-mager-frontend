const programsRoute = require('express').Router();
const Program = require('../api/Program');
const ProgramType = require('../api/ProgramType');
const timeUtils = require('../utils/time');
const stringUtils = require('../utils/string');

programsRoute.get('/programs', async (req, res) => {
    const { title, type } = req.query;

    const programApi = new Program();
    let getAllProgram = await programApi.getPrograms(title, type, null, null);

    let programs = [];
    if (getAllProgram.status == 200) {
        programs = getAllProgram.data.data;
    }

    const programTypeApi = new ProgramType();
    let getAllProgramType = await programTypeApi.getProgramTypes();
    
    let programTypes = [];
    if (getAllProgramType.status == 200) {
        programTypes = getAllProgramType.data.data;
    }

    res.render('programs/index', {
        programs, 
        programTypes,
        parseSecond: timeUtils.parseSecond,
        truncateString: stringUtils.truncateString
    });
});

programsRoute.get('/program/:slug', async (req, res) => {
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