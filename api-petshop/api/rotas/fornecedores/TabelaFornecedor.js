const { Error } = require('sequelize/types')
const Modelo = require('./modeloTabelaFornecedor')
module.exports = {
    listar(){
        return Modelo.findAll()
    },

    inserir(fornecedor){
        return Modelo.create(fornecedor)
    },

    async pegarPorId(id) {
        const encontrado = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if (!encontrado) {
            throw new Error('Nao encontrado')
        }

        return encontrado
    }


}