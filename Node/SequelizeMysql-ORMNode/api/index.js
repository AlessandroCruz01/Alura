import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())// Tudo que chega converte pra json

const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(port, console.log('Executando...'))