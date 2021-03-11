const usersRoute = require('express').Router();

const User = require('../api/Users');
const user = new User();

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
    const token = req.cookies.jwt_token;
    if (!token) {
        res.redirect('/login');
    }

    const userInformation = await user.getProfile(token);

    res.render('users/profile', { user: userInformation })
});

module.exports = usersRoute;