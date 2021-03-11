const usersRoute = require('express').Router();

usersRoute.get('/register', (req, res) => {
    res.render('users/register');
});

usersRoute.get('/login', (req, res) => {
    res.render('users/login');
});

usersRoute.get('/forgot-password', (req, res) => {
    res.render('users/forgot-password');
});

usersRoute.get('/forgot-password/save', (req, res) => {
    res.render('usrs/save-forgot-password');
});

usersRoute.get('/verification', (req, res) => {
    res.render('users/verification')
});

usersRoute.get('/verification/process', (req, res) => {
    res.render('users/verification-process')
});

usersRoute.get('/profile', async (req, res) => {
    res.render('users/profile')
});

module.exports = usersRoute;