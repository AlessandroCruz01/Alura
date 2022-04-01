const bodyParser = require('body-parser')

const routerPessoas = require('./pessoasRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(routerPessoas)
    
    app.get('/', (req, res) =>{
        res.send('Bem vindo a API Alura')
    })

}