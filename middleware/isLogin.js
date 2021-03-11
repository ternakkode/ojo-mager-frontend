const User = require('../api/User')

async function isLogin(req, res, next) {
    const token = req.cookies.jwt_token;
    if (!token) {
        res.redirect('/login')
    }

    const userApi = new User();
    const getProfile = await userApi.getProfile(token);

    if (getProfile.status != 200) {
        res.cookie('jwt_token', null, {maxAge: -1});
        res.cookie('user', null, {maxAge: -1});
        res.redirect('/login');
    }

    req.user = getProfile.data.data;
    next();
}

module.exports = isLogin;