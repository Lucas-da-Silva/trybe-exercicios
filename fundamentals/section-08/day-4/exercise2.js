const books = require('./books');

function reduceNames(books) {
  // escreva seu código aqui
  return books.reduce((result, book) => {
    var space = result.length ? ', ' : '';
    return result + space + book.author.name;
  }, '');
}

console.log(reduceNames(books));

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";