import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros)=>{
            res.status(200).json(livros)//traz tudo
        }) 
    }

    static cadastrarLivro = (req, res) => {
        const livro = new livros(req.body)

        livro.save((err) => {
            err ? res.status(500).send({message: `Erro: ${err}`}) : res.status(201).send(livro.toJSON())
        })
    }

}

export default LivroController