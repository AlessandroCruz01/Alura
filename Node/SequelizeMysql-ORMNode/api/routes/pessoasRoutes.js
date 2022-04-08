const {Router} = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.getAtivos)
    .get('/pessoas/all', PessoaController.getAllPersons)
    .get('/pessoas/:id', PessoaController.buscaId)
    .get('/pessoas/:estudanteId/matricula', PessoaController.getMatriculas)
    .post('/pessoas', PessoaController.createPeople)
    .put('/pessoas/:id', PessoaController.updatePeople)
    .delete('/pessoas/:id', PessoaController.deletePeople)
    .post('/pessoas/:id/restore', PessoaController.restorePeople)

    .get('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.buscaMatricula)
    .post('/pessoas/:idPessoa/matricula/', PessoaController.createMatricula)
    .put('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.updateMatricula)
    .delete('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.deleteMatricula)

module.exports = router