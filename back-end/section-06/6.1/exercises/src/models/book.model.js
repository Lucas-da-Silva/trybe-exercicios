const BookModel = (sequelize, DateType) => {
  const Book = sequelize.define('Book', {
    title: DateType.STRING,
    author: DateType.STRING,
    pageQuantity: DateType.INTEGER,
    publisher: DateType.STRING,
  });

  return Book;
};


module.exports = BookModel;
