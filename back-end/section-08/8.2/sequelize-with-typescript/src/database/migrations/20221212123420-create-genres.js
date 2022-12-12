module.exports = {
  up: async (queryInterface, { INTEGER, STRING }) => {
    await queryInterface.createTable('genres', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      genre: {
        type: STRING,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('genres')
  }
};
