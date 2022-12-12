module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'authors',
      [
        {
          name: 'J.K. Rowling',
        },
        {
          name: 'Neil Gaiman',
        },
        {
          name: 'George R.R. Martin',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('authors', null, {});
  },
};
