// const db = require('../models')
// const Sequelize = require('sequelize')
const {PessoasServices} = require('../services')

const personServices = new PessoasServices('Pessoas')


class PessoaController {

    static async getAtivos(req, res){
        try {   
            const activePersons = await personServices.getRegistersActive()
            return res.status(200).json(activePersons)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getAllPersons(req, res){
        try {   
            const todasAsPessoas = await personServices.getAllRegisters()
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
            console.log(person)
            const matriculas = await person.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)
            
        }
    }

    static async getMatriculasWithTurm(req, res){
        const {turmaID} = req.params

        try {
            const allMatriculas = await db.Matriculas.findAndCountAll({
                where: {
                    turma_id: Number(turmaID),
                    status:  'confirmado'
                },
                limit: 20,
                order:[['estudante_id', 'ASC']]
            })

            return res.status(200).json(allMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)
            
        }
    }

    static async getTurmasLotadas(req, res){
        const lotacaoTurma = 1 
        try {
            const turmasLotodas = await db.Matriculas.findAndCountAll({
                where: {
                    status: 'confirmado',
                },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
            })

            return res.status(200).json(turmasLotodas.count)
        } catch (error) {
            return res.status(500).json(error.message)
            
        }
    }

    static async cancelaPessoa(req, res){
        const {estudanteId} = req.params
        try {
           //acessar duas tabelas e fazer updates em ambas

           db.sequelize.transaction( async transacao => {
                await db.Pessoas
                .update({
                    ativo: false
                }, {
                    where: {
                        id: Number(estudanteId)
                    }
                },{
                    transaction: transacao
                })
            
                await db.Matriculas
                    .update({
                        status: 'cancelado'
                    }, {
                        where: {
                            estudante_id: Number(estudanteId)
                        }
                    },{
                    transaction: transacao

                    }
                )

                return res.status(200).json({message: `Matriculas referentes ao estudante ${estudanteId} foi cancelada`})
           })

            
        } catch (error) {
            return res.status(500).json(error.message)
            
        }
    }


}

module.exports = PessoaController