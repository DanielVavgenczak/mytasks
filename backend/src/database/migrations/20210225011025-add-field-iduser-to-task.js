'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
      return await queryInterface.addColumn('tasks','user_id', { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });     
  },

  down: async (queryInterface) => {
    return await queryInterface.removeColumn('tasks','user_id');
  }
};
