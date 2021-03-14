const articlesRoute = require('express').Router();

const Article = require('../api/Article');
const ArticleCategory = require('../api/ArticleCategory');

articlesRoute.get('/article', async (req, res) => {
    const { category, title, page } = req.query;

    const articleApi = new Article();
    
    let articles = [];
    await articleApi.getArticles(title, category, null, 9, true, page).then(res =>{
        articles = res.data.data;
    }).catch(err => {

    });

    const articleCategoryApi = new ArticleCategory();

    let articleCategories = [];
    await articleCategoryApi.getArticleCategories().then(res => {
        articleCategories = res.data.data;
    }).catch(err => {

    });

    res.render('articles/index', { category, title, articles, articleCategories });
});

articlesRoute.get('/article/:slug', async (req, res) => {
    const { slug } = req.params;

    const articleApi = new Article();

    let article = null;
    await articleApi.getArticle(slug).then(res => {
        article = res.data.data;
    }).catch(err => {
        return res.redirect('/');
    });

    let randomArticles = [];
    await articleApi.getArticles(null, null, true, 3).then(res => {
        randomArticles = res.data.data;
    }).catch(err => {

    })

    res.render('articles/detail',{article, randomArticles});
})

module.exports = articlesRoute;