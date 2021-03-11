import axios from 'axios';

class Base {
    constructor() {
        this.base_url = process.env.BASE_URL || 'https://ojo-mager-backend.herokuapp.com/api/'
    }

    needLogin(token) {
        this.header['Authorization'] = token;
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
        return await axios({
            method: this.method || 'get',
            url: this.base_url + ( this.endpoint || '' ),
            headers: this.headers || {},
            params: this.params || {},
            data: this.data || {},
        });
    }
}

export default Base;