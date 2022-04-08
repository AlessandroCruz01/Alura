const db = require('../models')

class PessoaController {
    static async getAllPersons(req, res){
        try {   
            const todasAsPessoas = await db.Pessoas.scope('all').findAll()
            return res.status(200).json(todasAsPessoas)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async getAtivos(req, res){
        try {   
            const activePersons = await db.Pessoas.findAll()
            return res.status(200).json(activePersons)
            
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
            return res.status(201).json({message:`${att}`})
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

    static async restorePeople(req, res){
        const { id } = req.params
        try {
            await db.Pessoas.restore({where: {id: Number(id)}})
            return res.status(201).json({message: `Id ${id} Restaurado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Controlador de Matriculas

    //http://localhost:3000/pessoas/:idPessoa/matricula/:idMatricula -> exemplo de rota que para buscar matricula
    static async buscaMatricula(req, res){
        const {idPessoa, idMatricula} = req.params
        try {
            const busca = await db.Matriculas.findOne({
                where : {
                    id: Number(idMatricula), 
                    estudante_id: Number(idPessoa)
                }
            })

            return res.status(200).json(busca)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/:idPessoa/matricula/
    static async createMatricula(req, res){
        const {idPessoa} = req.params
        const newMatricula = {...req.body, estudante_id: Number(idPessoa)}
        try {
            const create = await db.Matriculas.create(newMatricula)
            return res.status(201).json(create)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/:idPessoa/matricula/:idMatricula
    static async updateMatricula(req,res){
        const {idPessoa, idMatricula} = req.params
        const dateUpdate = req.body
        try {
            await db.Matriculas.update(dateUpdate, {where: {id : Number(idMatricula), estudante_id: Number(idPessoa)}})

            const att = await db.Matriculas.findOne({where : {id: Number(idMatricula)}})

            return res.status(201).json({message: att})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMatricula(req, res){
        const {idMatricula} = req.params

        try {
            await db.Matriculas.destroy({where : {id: Number(idMatricula)}})
            return res.status(201).json({message: `Id ${idMatricula} excluido!`})
        } catch (error) {
            return res.status(500).json(error.message)
            
        }
    }

    static async getMatriculas(req, res){
        const {estudanteId} = req.params

        try {
            // const matriculas = await db.Matriculas.findAll({where : {estudante_id: Number(idEstudante)}})
            const person = await db.Pessoas.findOne({ where : { id: Number(estudanteId) } })
            const matriculas = await person.getAulasMatriculadas()
            return res.status(200).json({matriculas})
        } catch (error) {
            return res.status(500).json(error.message)
            
        }
    }


}

module.exports = PessoaController