import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros)=>{
            res.status(200).json(livros)//traz tudo
        }) 
    }
}

export default LivroController