const Base = require('./Base')

class User extends Base {
    constructor() {
        super();
        this.feature_url = 'users'
    }

    async login(email, password) {
        this.setMethod('post');
        this.setEndpoint(this.feature_url + '/auth/login');
        this.setBody({
            email, password
        });

        return await this.createRequest();
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

    async verifyUser(code) {
        this.setMethod('post');
        this.setEndpoint(this.feature_url + '/verification/verify');
        this.setBody({
            code
        });

        return await this.createRequest();
    }

    async forgotPasswordRequest(email) {
        this.setMethod('post');
        this.setEndpoint(this.feature_url + '/forgot-password/new');
        this.setBody({
            email
        })

        return await this.createRequest();
    }

    async validateForgotPasswordRequest(code) {
        this.setMethod('post');
        this.setEndpoint(this.feature_url + '/forgot-password/validate');
        this.setBody({
            code
        });

        return await this.createRequest();
    }

    async saveNewPasswordFromReset(code, password) {
        this.setMethod('post');
        this.setEndpoint(this.feature_url + '/forgot-password/save');
        this.setBody({
            code, password
        });

        return await this.createRequest();
    }
}

module.exports = User;