'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('categories', { 
     id:{
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
     },
     name: {
       type: Sequelize.STRING,
       allowNull: false
     },
     admin_id: {
       type: Sequelize.INTEGER,
       allowNull: true,
       references: {model: 'users', key: 'id'}
     }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
    
  }
};
