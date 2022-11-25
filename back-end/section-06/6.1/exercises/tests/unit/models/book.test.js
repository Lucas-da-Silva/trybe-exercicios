const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/models/book.model');

describe('The model Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  it('has the name "Book"', () => {
    checkModelName(Book)('Book');
  });

  it('has the properties "title", "author", "pageQuantity" and "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
});
