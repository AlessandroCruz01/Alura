const {Router} = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodos)
    .get('/pessoas/:id', PessoaController.buscaId)
    .post('/pessoas', PessoaController.createPeople)
    .put('/pessoas/:id', PessoaController.updatePeople)
    .delete('/pessoas/:id', PessoaController.deletePeople)

module.exports = router