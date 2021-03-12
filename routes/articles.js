const articlesRoute = require('express').Router();

const Article = require('../api/Article');
const ArticleCategory = require('../api/ArticleCategory');

articlesRoute.get('/articles', async (req, res) => {
    const { category, title } = req.query;

    const articleApi = new Article();
    const getAllArticle = await articleApi.getArticles(title, category, null, null);
    const articles = getAllArticle.data.data;

    const articleCategoryApi = new ArticleCategory();
    const getAllArticleCategory = await articleCategoryApi.getArticleCategories();
    const articleCategories = getAllArticleCategory.data.data;

    res.render('articles/index', { articles, articleCategories });
});

module.exports = articlesRoute;