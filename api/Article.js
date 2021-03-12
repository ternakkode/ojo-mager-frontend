const Base = require('./Base');

class Article extends Base {
    constructor() {
        super();
        this.feature_url = 'articles'
    }

    async getArticles(title = null, category = null, isRandom = false, limit = null) {        
        if (title) {
            this.addParams(title);
        }

        if (category) {
            this.addParams(category);
        }

        if (isRandom) {
            this.addParams(isRandom);
        }

        if (limit) {
            this.addParams(limit);
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