const crypto = require('node:crypto')
const { AxiosError } = require('axios');
const qs = require('qs');

const jtRastreamento = require('../../services/JTRastreamento');

const execute = async ({codigoRastreamento}) => {
    // biome-ignore lint/suspicious/noAsyncPromiseExecutor: <explanation>
    return new Promise(async (resolve, reject) => {
        try {
            const bizContent = `{"billCodes":"${codigoRastreamento}"}`
            const Apiaccount = process.env.JT_APIACCOUNT
            const privateKey = process.env.JT_PRIVATEKEY

            const md5String = crypto.createHash('md5').update(`${bizContent}${privateKey}`).digest('')
            const base64String = Buffer.from(md5String).toString('base64');
            const Digest = base64String

            const response = await jtRastreamento({
                method: 'POST',
                url: '',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Apiaccount,
                    Digest,
                    timestamp: Date.now(),
                },
                data: qs.stringify({bizContent})
            })

            if(response.data.code === '1'){
                return resolve(response.data.data[0].details)
            }
            
            return resolve(response.data)
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