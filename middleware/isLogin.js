import User from '../public/api';

async function isLogin(req, res, next) {
    const token = req.cookies.jwt_token;
    if (!token) {
        res.redirect('/login')
    }

    const userApi = new User();
    const user = await userApi.getProfile(token);

    if (!user) {
        res.cookie('jwt_token', null, {maxAge: -1});
        res.cookie('user', null, {maxAge: -1});
        res.redirect('/login');
    }

    req.user = user;
    next();
}

export default isLogin;