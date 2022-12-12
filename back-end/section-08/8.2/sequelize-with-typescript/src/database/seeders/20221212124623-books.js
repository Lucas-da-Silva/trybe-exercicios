module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Harry Potter',
          author_id: '1',
          genre_id: '2',
        },
        {
          title: 'Norse mythology',
          author_id: '2',
          genre_id: '3',
        },
        {
          title: 'Fire & Blood',
          author_id: '3',
          genre_id: '1',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};

