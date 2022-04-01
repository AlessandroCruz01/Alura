'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      //FKs
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Pessoas', key: 'id'}
      },
      nivel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Niveis', key: 'id'}
      },

      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Turmas');
  }
};