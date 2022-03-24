import express from "express";
import db from "../config/dbConnect.js";
import routes from"./routes/index.js"

//Teste de conexao ao db
db.on('error', console.log.bind(console, 'Erro de conexao'))
db.once('open', () => {
    console.log("Conexao sucesso!")
})

const app = express()
app.use(express.json())//Para interpretar json
routes(app)


export default app
