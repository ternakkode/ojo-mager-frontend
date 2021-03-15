const User = require('../api/User');

async function isLogin(req, res, next) {
    const token = req.cookies.jwt_token;
    const user = req.cookies.user;

    if (!token) {
        return res.redirect('/login')
    }

    const userApi = new User();
    try {
        const userData = await userApi.getProfile(token);
        req.user = userData.data.data;

        next();
    } catch (err) {
        if (err.response.data.error.message == 'USER_NEED_EMAIL_VERIFICATION') {
            req.user = JSON.parse(user);
            next();
        } else {
            return res.cookie('jwt_token', null, {maxAge: -1}).cookie('user', null, {maxAge: -1}).redirect('/login');
        }
    }
}

module.exports = isLogin;