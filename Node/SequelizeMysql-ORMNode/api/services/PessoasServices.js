const db = require('../models')
const Services = require('./Services')

class PessoasServices extends Services {
    constructor(){
        super('Pessoas')
    }
    //metodos expecificos do cotrolador de pessoas

    async getRegistersActive( where = {} ){
        return db[this.nameModel].findAll({where: { ...where }})
    }

    async getAllRegisters(where = {}){
        return db[this.nameModel]
            .scope('all')
            .findAll({where: { ...where }})
    }
}

module.exports = PessoasServices