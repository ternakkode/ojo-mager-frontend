const usersRoute = require('express').Router();

const User = require('../api/User');
const isLogin = require('../middleware/isLogin');
const isUnauthorized = require('../middleware/isUnauthorized');
const isVerified = require('../middleware/isVerified');

usersRoute.get('/register', isUnauthorized, async (req, res) => {
    res.render('users/register');
});

usersRoute.get('/login', isUnauthorized, async (req, res) => {
    res.render('users/login');
});

usersRoute.get('/logout', async (req, res) => {
    res.cookie('jwt_token', null, { maxAge: -1 });
    res.cookie('user', null, { maxAge: -1 });
    return res.redirect('/login');
});

usersRoute.get('/forgot-password', isUnauthorized, async (req, res) => {
    res.render('users/forgot-password');
});

usersRoute.get('/forgot-password/save', isUnauthorized, async (req, res) => {
    const { code } = req.query;

    const userApi = new User();
    let isSuccess = true;
    let error = null;

    if (!code) {
        isSuccess = false;
        error = 'CODE_NOT_FOUND';
    } else {
        try {
            const verifyRequest = await userApi.validateForgotPasswordRequest(code);
        } catch (err) {
            isSuccess = false;
            error = err.response.data.error.message;
        }
    }

    res.render('users/save-forgot-password', { isSuccess, error, code });
});

usersRoute.get('/verification', isUnauthorized, async (req, res) => {
    res.render('users/verification')
});

usersRoute.get('/verification/process', isUnauthorized, async (req, res) => {
    const { code } = req.query;

    const userApi = new User();
    let isSuccess = true;
    let error = null;

    if (!code) {
        isSuccess = false;
        error = 'CODE_NOT_FOUND';
    } else {
        try {
            const verifyRequest = await userApi.verifyUser(code);
        } catch (err) {
            isSuccess = false;
            error = err.response.data.error.message;
        }
    }

    res.render('users/verification-process', { isSuccess, error })
});

usersRoute.get('/profile', isLogin, isVerified, async (req, res) => {
    res.render('users/profile', { user: req.user })
});

module.exports = usersRoute;