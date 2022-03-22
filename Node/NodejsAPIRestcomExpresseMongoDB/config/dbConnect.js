import mongoose from "mongoose";

mongoose.connect('mongodb+srv://alura:123@cluster0.6i9ew.mongodb.net/aluraLivros')

let db = mongoose.connection

export default db