'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisher');
  }
};
