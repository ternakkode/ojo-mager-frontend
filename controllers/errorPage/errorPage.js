exports.errorPage = (req, res, next) => {
    res.status(404).render('error-page/errorPage', { title: 'Page Not Found'});
}