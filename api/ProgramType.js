const Base = require('./Base');

class ProgramType extends Base {
    constructor() {
        super();
        this.feature_url = 'program-types'
    }

    async getProgramTypes(slug) {
        this.setEndpoint(this.feature_url);
        this.setMethod('get');

        return await this.createRequest();
    }
}

module.exports = ProgramType;