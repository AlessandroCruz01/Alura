import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    tipo: {type: String, required: true},
    digital: {type: Boolean, default: false},
    preco: {type: Number, required: true}
})

const games = mongoose.model('games', gameSchema)

export default games
