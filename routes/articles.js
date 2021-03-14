const articlesRoute = require('express').Router();

const Article = require('../api/Article');
const ArticleCategory = require('../api/ArticleCategory');

articlesRoute.get('/article', async (req, res) => {
    const { category, title } = req.query;

    const articleApi = new Article();
    const getAllArticle = await articleApi.getArticles(title, category, null, null);
    const articles = getAllArticle.data.data;

    const articleCategoryApi = new ArticleCategory();
    const getAllArticleCategory = await articleCategoryApi.getArticleCategories();
    const articleCategories = getAllArticleCategory.data.data;

    res.render('articles/index', { articles, articleCategories });
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