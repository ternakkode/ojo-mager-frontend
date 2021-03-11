const axios = require('axios');

class Base {
    constructor() {
        this.base_url = process.env.BASE_URL || 'https://ojo-mager-backend.herokuapp.com/api'
    }

    async getRequest(endpoint, params = {}, data = {}, headers = {}) {
        return await axios({
            method: 'get',
            url: this.base_url + endpoint,
            headers,
            params,
            data
        })
    }
}

module.exports = Base;