import express from 'express'
import GamesCotroller from '../controllers/gamesController.js'


const router = express.Router()

router
    .get('/games', GamesCotroller.listarGames)
    .post('/games', GamesCotroller.criarGame)

export default router
