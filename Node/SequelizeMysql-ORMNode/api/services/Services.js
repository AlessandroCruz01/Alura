const db = require('../models')

class Services {
    constructor(nameModel){
        this.nameModel = nameModel
    }

    async getAllRegisters() {
        return db[this.nameModel].findAll()
    }

    async getOneRegister(id){
        //
    }

    async createRegister(date){
        //
    }

    async updateRegister(dateAtualization, id){
        //
    }

    async deleteRegister(id){
        //
    }
}

module.exports = Services