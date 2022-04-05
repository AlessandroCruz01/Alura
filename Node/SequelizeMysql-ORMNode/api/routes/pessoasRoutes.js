const {Router} = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodos)
    .get('/pessoas/:id', PessoaController.buscaId)
    .post('/pessoas', PessoaController.createPeople)
    .put('/pessoas/:id', PessoaController.updatePeople)
    .delete('/pessoas/:id', PessoaController.deletePeople)

    .get('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.buscaMatricula)
    .post('/pessoas/:idPessoa/matricula/', PessoaController.createMatricula)
    .put('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.updateMatricula)
    .delete('/pessoas/:idPessoa/matricula/:idMatricula', PessoaController.deleteMatricula)

module.exports = router