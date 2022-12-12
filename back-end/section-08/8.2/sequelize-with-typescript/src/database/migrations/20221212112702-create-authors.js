module.exports = {
  up: async (queryInterface, { INTEGER, STRING }) => {
    await queryInterface.createTable('authors', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('authors');
  }
}
