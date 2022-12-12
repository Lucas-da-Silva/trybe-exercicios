module.exports = {
  up: async (queryInterface, { INTEGER, STRING }) => {
    await queryInterface.createTable('books', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: STRING,
        allowNull: false,
      },
      authorId: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'authors',
          key: 'id',
        },
        field: 'author_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      genreId: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'genres',
          key: 'id',
        },
        field: 'genre_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('books');
  },
};
