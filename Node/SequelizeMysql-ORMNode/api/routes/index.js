const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())
    
    app.get('/', (req, res) =>{
        res.send('Bem vindo a API Alura')
    })
}