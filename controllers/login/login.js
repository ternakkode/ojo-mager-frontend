const API = require('./../api/api');


exports.getLogin = (req, res) => {
    res.render('login/login');
}

exports.postLogin = (req, res) => {
    API.login(req.body)
        .then(results => {
                const isVerified = results.data.data.user.is_verified;
                const token = results.data.data.token;
            const name = results.data.data.user.name;
            const oneDayCookies = 24 * 3600 * 1000;
                res.cookie('username', name);
                res.cookie('token', token, { expires: new Date(Date.now() + oneDayCookies) });
            
                if (isVerified) {
                    res.redirect("/login");
                } else {
                        API.verification(token)
                            .then(results => {
                                res.redirect("/verification");
                            })
                            .catch(err => console.log(err.response.data))
                }
            })
        .catch(error => {
                console.log('error', error.response.data);
            })
}

exports.getVerification = (req, res) => {
    res.render('verification/verification');
}

exports.getForgotPassword = (req, res) => {
    res.render('login/forgotPassword');
}

exports.postForgotPassword = (req, res) => {
    const { email } = req.body;
    API.forgotPassword(email)
        .then(results => {
            console.log(results);
            res.render('login/login');
        })
        .catch(err => console.log(err.response.data));
}

exports.getChangePassword = (req, res) => {
    // mengambil query
    // cek query
    // jika ada ngehit api 
        // jika success merender change password
        // jika redirect login
    // jika tidak redirect login 
    res.render('login/changePassword');
}