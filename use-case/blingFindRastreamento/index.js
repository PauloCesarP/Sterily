const { AxiosError } = require('axios');

const apiBling = require('../../services/apiBling');

const execute = async ({id_contato}) => {
    // biome-ignore lint/suspicious/noAsyncPromiseExecutor: <explanation>
    return new Promise(async (resolve, reject) => {
        try {
            const response = await apiBling.get('/pedidos/json/', {
                params: {
                    filters: `idContato[${id_contato}]`
                }
            });
        
            resolve(response.data.retorno.pedidos.map(pedido => pedido?.pedido?.codigosRastreamento));
        } catch (error) {
            if(error instanceof AxiosError) {
                reject({
                    status: error.response.status,
                    message: error.response.data.retorno.error
                })
            }
    
            reject({
                status: 500,
                message: 'Internal Server Error'
            })
        }
    })
}

module.exports = execute;