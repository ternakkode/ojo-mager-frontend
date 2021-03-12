const axios = require('axios');

class Base {
    constructor() {
        axios.defaults.validateStatus = (status) => {

            return status >= 200 && status < 400;
        }

        this.base_url = process.env.BASE_URL || 'https://ojo-mager-backend.herokuapp.com/api/'
        this.endpoint = '';
        this.headers = {}
        this.params = {};
        this.data = {};
    }

    needLogin(token) {
        this.headers['Authorization'] = 'Bearer ' + token;
    }

    setEndpoint(endpoint) {
        this.endpoint = endpoint;
    }
    
    setMethod(method) {
        this.method = method;
    }

    addBody(key, value) {
        this.data[key] = value;
    }

    setBody(data) {
        this.data = data;
    }

    addParams(key, value) {
        this.params[key] = value;
    }

    setParams(params) {
        this.params = params;
    }

    async createRequest() {
        const res =  await axios({
            method: this.method || 'get',
            url: this.base_url + ( this.endpoint || '' ),
            headers: this.headers || {},
            params: this.params || {},
            data: this.data || {},
        });

        this.resetInput();

        return res;
    }

    resetInput() {
        this.endpoint = '';
        this.header = {}
        this.params = {};
        this.data = {};
    }
}

module.exports = Base;