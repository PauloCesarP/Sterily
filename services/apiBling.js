const axios = require('axios')

const apiBling = axios.create({
    baseURL: 'https://bling.com.br/Api/v2/',
    params: {
        apikey: process.env.BLING_API_KEY
    }
})

module.exports = apiBling;