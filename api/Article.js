const Base = require('./Base');

class Article extends Base {
    constructor() {
        super();
        this.feature_url = 'articles'
    }

    async getArticles(title = null, category = null, isRandom = false, limit = null, isPaginated = false, page = 1) {        
        if (title) {
            this.addParams('title', title);
        }

        if (category) {
            this.addParams('category', category);
        }

        if (isRandom) {
            this.addParams('isRandom', isRandom);
        }

        if (limit) {
            this.addParams('limit', limit);
        }

        if (isPaginated) {
            this.addParams('isPaginated', isPaginated);
        }

        if (page) {
            this.addParams('page', page);
        }
        
        this.setEndpoint(this.feature_url);
        this.setMethod('get');
        const articles = await this.createRequest();
        
        return articles;
    }

    async getArticle(slug) {
        this.setEndpoint(this.feature_url + '/' + slug);
        this.setMethod('get');

        const article = await this.createRequest();

        return article;
    }
}

module.exports = Article;