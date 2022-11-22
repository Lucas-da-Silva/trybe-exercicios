const BookModel = (sequelize, DateType) => {
  const Book = sequelize.define('Book', {
    title: DateType.STRING,
    author: DateType.STRING,
    pageQuantity: DateType.INTEGER,
    createdAt: DateType.DATE,
    updatedAt: DateType.DATE
  });

  return Book;
};


module.exports = BookModel;
