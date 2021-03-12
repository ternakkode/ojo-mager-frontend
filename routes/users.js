const usersRoute = require('express').Router();

usersRoute.get('/register', (req, res) => {
    res.render('users/register',{title:"Registrasi"});
});

usersRoute.get('/login', (req, res) => {
    res.render('users/login',{title:"Login"});
});

usersRoute.get('/forgot-password', (req, res) => {
    res.render('users/forgot-password',{title:"forgot-password"});
});

usersRoute.get('/forgot-password/save', (req, res) => {
    res.render('users/save-forgot-password',{title:"save-forgot-password"});
});

usersRoute.get('/verification', (req, res) => {
    res.render('users/verification',{title:"verification"})
});

usersRoute.get('/verification/process', (req, res) => {
    res.render('users/verification-process',{title:"verification-process"})
});

usersRoute.get('/profile', async (req, res) => {
    res.render('users/profile')
});

module.exports = usersRoute;