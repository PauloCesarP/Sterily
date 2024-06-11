const { AxiosError } = require('axios');

const apiBling = require('../../services/apiBling');

const execute = async ({cpf}) => {
    // biome-ignore lint/suspicious/noAsyncPromiseExecutor: <explanation>
    return new Promise(async (resolve, reject) => {
        try {
            const response = await apiBling.get(`/contato/${cpf}/json/`);

            if(response.data.retorno.erros){
                return reject({
                    status: 404,
                    message: response?.data?.retorno?.erros[0].erro.msg
                })
            }
    
            if(response.data.retorno.contatos.length === 1){
                return resolve({id: response.data.retorno.contatos[0].contato.id});
            }
    
            if(response.data.retorno.contatos.length > 1){
                return resolve({id: response.data.retorno.contatos[0].contato.id});
            }
        
            return resolve(response.data.retorno.contatos);
        } catch (error) {
            console.log(error)

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