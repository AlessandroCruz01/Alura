import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros)=>{
            res.status(200).json(livros)//traz tudo
        }) 
    }

    static buscarLivroId = (req,res) => {
        const id = req.params.id

        livros.findById(id, (err, livros) => {
            err ? res.status(400).send({message: `Erro: ${err}`}) : res.status(200).send(livros)
        })

    }

    static cadastrarLivro = (req, res) => {
        const livro = new livros(req.body)

        livro.save((err) => {
            //Se for erro
            err ? res.status(500).send({message: `Erro: ${err}`}) : res.status(201).send(livro.toJSON())
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            //Se nao for erro
            !err ? res.status(200).send({message: 'Livro atualizado'}) : res.status(500).send({message: err.message})
        })

    }

    static excluirLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id,(err) => {
            err ? res.status(500).send({message: `Erro: ${err}`}) : res.status(200).send({message: 'Livro removido'})

        })
    }

}

export default LivroController