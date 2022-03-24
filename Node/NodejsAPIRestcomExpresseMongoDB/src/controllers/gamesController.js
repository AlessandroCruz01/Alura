import games from "../models/Games.js";

class GamesCotroller {

    static listarGames = (req, res) => {
        games.find((err, games)=>{
            err ? res.status(500).send({message: `Erro de busca ${err}`}) : res.status(200).json(games)//traz tudo
        }) 
    }

    static criarGame = (req, res) => {
        const game = new games(req.body)
        game.save((err) => {
            //Se for erro
            err ? res.status(500).send({message: `Erro: ${err}`}) : res.status(201).send(game.toJSON())
        })
    }

}

export default GamesCotroller