const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')
const { response } = require('express')

roteador.get('/', async(req, res) => {
    const resultados = await TabelaFornecedor.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (req, res) => {
    const dates = req.body
    const fornecedor = new Fornecedor(dates)
    await fornecedor.criar()
    res.send(
       JSON.stringify(fornecedor) 
    )
})

roteador.get('/:idFornecedor', async (req, res) => {
    try {
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({id: id})
        await fornecedor.carregar()
        response.send(
            JSON.stringify(fornecedor)
        )
    } catch (error){
        res.send({
            mensagem: error.message
        }
        )
    }
})

module.exports = roteador