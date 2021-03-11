const Base = require('./Base');

class User extends Base {
    constructor() {
        super();
    }

    async getProfile(token) {
        const url = '/users/me';

        const response = await this.getRequest(url, {}, {
            'Authorization': 'Bearer ' + token
        });

        return response;
    }
}

module.exports = User;