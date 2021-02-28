'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn('tasks','user_id', { 
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {model: 'users', key: 'id'},
    //   onUpdate: 'cascade',
    //   ondeDelete: 'SET NULL'
    // });
  },

  down: async (queryInterface) => {
    //  await queryInterface.removeColumn('tasks','user_id');
     
  }
};
