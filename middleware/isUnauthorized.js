async function isUnauthorized(req, res, next) {
    const token = req.cookies.jwt_token;
    if (token) {
        res.redirect('/login')
    }

    next();
}

module.exports = isUnauthorized;