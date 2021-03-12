const Base = require('./Base');

class ArticleCategory extends Base {
    constructor() {
        super();
        this.feature_url = 'article-categories'
    }

    async getArticleCategories() {
        this.setEndpoint(this.feature_url);
        this.setMethod('get');

        return await this.createRequest();
    }
}

module.exports = ArticleCategory;