const axios = require('axios')

const apiRastreamento = axios.create({
    baseURL: 'https://openapi.jtjms-br.com/webopenplatformapi/api/logistics/trace'
})

module.exports = apiRastreamento;