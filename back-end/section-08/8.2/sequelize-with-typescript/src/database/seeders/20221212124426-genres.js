module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'genres',
      [
        {
          genre: 'Fiction',
        },
        {
          genre: 'Fantasy',
        },
        {
          genre: 'Mythology',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('genres', null, {});
  },
};
