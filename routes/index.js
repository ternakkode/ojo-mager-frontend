const indexRoute = require('express').Router();

indexRoute.get('/', (req, res) => {
    res.render('index');
})

module.exports = indexRoute;