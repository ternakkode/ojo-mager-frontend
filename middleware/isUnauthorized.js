async function isUnauthorized(req, res, next) {
    const token = req.cookies.jwt_token;
    if (token) {
        res.redirect('/')
    }

    next();
}

module.exports = isUnauthorized;