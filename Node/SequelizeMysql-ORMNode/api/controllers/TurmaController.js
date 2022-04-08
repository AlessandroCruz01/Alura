// controllers/TurmaController.js

const db = require('../models')

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await db.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaTurma(req, res) {
      const { id } = req.params
      try {
        const umaTurma = await db.Turmas.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(umaTurma)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async criaTurma(req, res) {
      const novaTurma = req.body
      try {
        const novaTurmaCriada = await db.Turmas.create(novaTurma)
        return res.status(200).json(novaTurmaCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async atualizaTurma(req, res) {
      const { id } = req.params
      const novasInfos = req.body
      try {
        await db.Turmas.update(novasInfos, { where: { id: Number(id) }})
        const turmaAtualizada = await db.Turmas.findOne( { where: { id: Number(id) }})
        return res.status(200).json(turmaAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async apagaTurma(req, res) {
      const { id } = req.params
      try {
        await db.Turmas.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async restauraTurma(req, res) {
      const { id } = req.params
      try {
        await db.Turmas.restore( {where: { id: Number(id) } } )
        return res.status(200).json({ mensagem: `id ${id} restaurado`})
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
}

module.exports = TurmaController