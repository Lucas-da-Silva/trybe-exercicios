'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [
    {
      title: 'Chainsaw Man',
      author: 'Tatsuki Fujimoto',
      pageQuantity: '200',
      publisher: 'Planet Manga',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: '1984',
      author: 'George Orwell',
      pageQuantity: '400',
      publisher: 'Letter Company',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ]),

  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
