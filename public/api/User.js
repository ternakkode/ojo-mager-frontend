import Base from './Base.js'

class User extends Base {
    constructor() {
        super();
    }

    async getProfile(token) {
        this.needLogin(token);
        this.setMethod('get');
        this.setEndpoint('users/me');

        const response = await this.createRequest();

        return response;
    }
}

export default User;