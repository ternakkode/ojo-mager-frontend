async function isUnauthorized(req, res, next) {
    const token = req.cookies.jwt_token;
    if (token) {
        return res.redirect('/')
    }

    next();
}

module.exports = isUnauthorized;