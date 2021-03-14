const Base = require('./Base');

class Program extends Base {
    constructor() {
        super();
        this.feature_url = 'programs'
    }

    async getPrograms(title = null, category = null, isRandom = false, limit = null, isPaginated = false, page = 1) {
        if (title) {
            this.addParams('title', title);
        }

        if (category) {
            this.addParams('type', category);
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

        return await this.createRequest();
    }

    async getProgram(token, slug) {
        this.needLogin(token)
        this.setEndpoint(this.feature_url + '/' + slug);
        this.setMethod('get');

        return await this.createRequest();
    }
}

module.exports = Program;