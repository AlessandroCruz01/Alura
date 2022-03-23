import express from "express";
import db from "../config/dbConnect.js";
import livros from './models/Livro.js'

//Teste de conexao ao db
db.on('error', console.log.bind(console, 'Erro de conexao'))
db.once('open', () => {
    console.log("Conexao sucesso!")
})

const app = express()
app.use(express.json())//Para interpretar json

// const livros = [
//     {id: 1, "titulo": "Sr dos aneis"},
//     {id: 2, "titulo": "Chihiro"}
// ]

app.get('/', (req, res)=> {
    res.status(200).send('Curso Node')
})

app.get('/livros', (req, res) => {
    livros.find((err, livros)=>{
        res.status(200).json(livros)//traz tudo
    }) 
 
})

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    res.json(livros[index])
})

app.post('/livros', (req,res) => {
    livros.push(req.body)
    res.status(201).send('Cadastrado')
})

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})
//funcao para buscar o livro por id
function buscaLivro(id){
    return livros.findIndex(livros => livros.id == id)
}

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    const index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} excluido`)

})

export default app
