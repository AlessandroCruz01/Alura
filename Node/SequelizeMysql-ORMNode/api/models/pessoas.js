'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate: {
        //funcao validadora pesonalizada
        validator: function(date){
          if (date.length < 3) throw new Error(' Nome deve ter mais de 3 caracteres ')
        }
      }
    
    },

    ativo: DataTypes.BOOLEAN,

    //validando compo email com validador padrao do sequelize
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true, //Argumento que devera ser validado
          msg: 'Dado do tipo Email invalido!' //Mensagem de erro
        }
      }
    },

    role: DataTypes.STRING

  }, {
    paranoid: true,
    defaultScope: {
      //Define o padrao - é posto por padrao, nao precisa ser posto no controller
      where: { ativo: true }
    },
    scopes: {
      all: {where: {}}
      // Quantos escopos forem necessarios, sobscreve o padrao e tem que ser chamados no controller.
    }
  });

  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, { foreignKey: 'docente_id'})
    Pessoas.hasMany(models.Matriculas, { 
      foreignKey: 'estudante_id', 
      scope: {status: 'confirmado'},
      as: 'getAulasMatriculadas' //o escopo vai com esse nome
    })
  };
  
  return Pessoas;
};