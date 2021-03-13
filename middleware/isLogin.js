const User = require('../api/User');

async function isLogin(req, res, next) {
    const token = req.cookies.jwt_token;
    if (!token) {
        return res.redirect('/login')
    }

    const userApi = new User();
    try {
        const userData = await userApi.getProfile(token);
        req.user = userData.data.data;

        next();
    } catch (err) {
        res.cookie('jwt_token', null, {maxAge: -1});
        res.cookie('user', null, {maxAge: -1});
        return res.redirect('/login');
    }
}

module.exports = isLogin;