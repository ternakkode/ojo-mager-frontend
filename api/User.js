const Base = require('./Base')

class User extends Base {
    constructor() {
        super();
        this.feature_url = 'users'
    }

    async getProfile(token) {
        this.needLogin(token);
        this.setMethod('get');
        this.setEndpoint(this.feature_url + '/me');

        return await this.createRequest();
    }

    async register(name, email, password, role = 'user') {
        this.setMethod('post');
        this.setEndpoint(this.feature_url + '/auth/register');
        this.setBody({
            name,
            email,
            password,
            role
        });

        return await this.createRequest();
    }

    async sendEmailVerification(user_id) {
        this.setMethod('post');
        this.setEndpoint(this.feature_url + '/verification/new');
        this.setBody({
            user_id
        });

        return await this.createRequest();
    }
}

module.exports = User;