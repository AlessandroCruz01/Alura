const {Router} = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.getAllPersons)
    .get('/pessoas/actives', PessoaController.getAtivos)
    .get('/pessoas/:id', PessoaController.buscaId)
    .get('/pessoas/:estudanteId/matricula', PessoaController.getMatriculas)
    .get('/pessoas/matricula/:turmaID/confirmadas', PessoaController.getMatriculasWithTurm)
    .get('/pessoas/matricula/lotada', PessoaController.getTurmasLotadas)
    .get('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.buscaMatricula)

    .post('/pessoas', PessoaController.createPeople)
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
    .post('/pessoas/:id/restore', PessoaController.restorePeople)
    .post('/pessoas/:idPessoa/matricula/', PessoaController.createMatricula)
    
    .put('/pessoas/:id', PessoaController.updatePeople)
    .put('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.updateMatricula)

    .delete('/pessoas/:id', PessoaController.deletePeople)
    .delete('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.deleteMatricula)

module.exports = router