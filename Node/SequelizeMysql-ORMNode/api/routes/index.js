const bodyParser = require('body-parser')

const routerPessoas = require('./pessoasRoutes')
const routeNiveis = require('./niveisRoute')
const routeTurmas = require('./turmasRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        routerPessoas,
        routeNiveis,
        routeTurmas
    )
    
    app.get('/', (req, res) =>{
        res.send('Bem vindo a API Alura')
    })

}