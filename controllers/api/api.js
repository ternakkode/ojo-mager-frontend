const axios = require('axios').default;

const host = axios.create({
    baseURL : "https://backend-sport-synrgy.herokuapp.com",
});

const api = {
    registrasi: (formData) => host.post('/api/users/register', 
        formData),
    login: (formData) => host.post('/api/users/login', 
        formData),
    verification: (token) => host.post('/api/users/verification/new', {},
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }),
    forgotPassword: (email) => host.post('/api/users/forgot-password/new', {
        email:email
    }),
    
}


module.exports = api;   