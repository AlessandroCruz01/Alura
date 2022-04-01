const db = require('../models')

class PessoaController {
    static async pegaTodos(req, res){
        try {   
            const todasAsPessoas = await db.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async buscaId(req, res){
        const id = req.params.id
        try {
            const buscada = await db.Pessoas.findOne({
                where : {
                    id: Number(id)
                }
            })

            return res.status(200).json(buscada)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }

    static async createPeople(req, res){
        const newPerson = req.body
        try {
            const create = await db.Pessoas.create(newPerson)
            return res.status(201).json(create)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }

    static async updatePeople(req,res){
        const { id } = req.params
        const dateUpdate = req.body
        try {
            await db.Pessoas.update(dateUpdate, {where: {id : Number(id)}})
            const att = await db.Pessoas.findOne({where : {id: Number(id)}})
            return res.status(201).json({message: att})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletePeople(req, res){
        const { id } = req.params
        try {
            await db.Pessoas.destroy({where : {id: Number(id)}})
            return res.status(201).json({message: `Id ${id} excluido!`})
        } catch (error) {
            return res.status(500).json(error.message)
            
        }
    }
}

module.exports = PessoaController