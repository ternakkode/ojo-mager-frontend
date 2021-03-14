const indexRoute = require('express').Router();

const timeUtils = require('../utils/time');
const stringUtils = require('../utils/string');
const Article = require('../api/Article');
const Program = require('../api/Program');

indexRoute.get('/', async (req, res) => {
    const programApi = new Program();
    let threePrograms = [];
    await programApi.getPrograms(null, null, null, 3).then(res => {
        threePrograms = res.data.data;
    }).catch(err => {

    });

    const articleApi = new Article;
    let threeArticles = [];
    await articleApi.getArticles(null, null, null, 3).then(res => {
        threeArticles = res.data.data;
    }).catch(err => {
        
    });

    res.render('index', {
        threePrograms,
        threeArticles,
        parseSecond: timeUtils.parseSecond,
        truncateString: stringUtils.truncateString
    });
})

module.exports = indexRoute;