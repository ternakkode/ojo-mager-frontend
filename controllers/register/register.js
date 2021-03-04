const API = require('./../api/api');

exports.getRegister = (req, res) => {
    res.render('register/register');
}

exports.postRegister = (req, res) => {
    API.registrasi(req.body)
        .then(results => {
            res.redirect("/login");
        })
        .catch(error => {
            console.log('error', error.response.data);
        });
}