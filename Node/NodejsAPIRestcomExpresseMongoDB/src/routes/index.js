import express from 'express'
import livros from './livrosRoutes.js'
import games from  './gamesRoutes.js'


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Curso de Node'})
    })

    app.use(
        express.json(),
        livros,
        games
    )

}

export default routes