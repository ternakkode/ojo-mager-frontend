async function isVerified(req, res, next) {
    const user = req.user;

    if (!user.is_verified) {
        return res.redirect('/verification?user_id=' + user);
    }

    next();
}

module.exports = isVerified;