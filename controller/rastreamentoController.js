const blingSearchByCpf = require('../use-case/blingSearchByCpf')
const blingFindRastreamento = require('../use-case/blingFindRastreamento')
const jtRastreamento = require('../use-case/jtRastreamento')

const index = async (req, res) => {
    try {
        const { cpf } = req.params
        const contato = await blingSearchByCpf({ cpf })

        // console.log(contato)

        const pedidos = await blingFindRastreamento({ id_contato: contato.id })

        // console.log(pedidos)

        if(pedidos.filter(item => item !== undefined).length === 0){
            return res.status(404).send({ message: 'Nenhum pedido encontrado' })
        }

        const rastreamento = await jtRastreamento({ codigoRastreamento: pedidos[0].codigoRastreamento })

        return res.json(rastreamento);
    } catch (error) {
        if(!error.status) return res.status(500).send({ message: error.message })

        return res.status(error.status).send({ message: error.message });
    }
}

module.exports = {
    index
}