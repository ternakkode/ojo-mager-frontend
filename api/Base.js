const axios = require('axios');

class Base {
    constructor() {
        this.base_url = process.env.BASE_URL || 'https://ojo-mager-backend.herokuapp.com/api'
    }

    async getRequest(endpoint, data = {}, headers = {}) {
        return await axios({
            method: 'get',
            url: this.base_url + endpoint,
            data,
            headers
        })
    }
}

module.exports = Base;