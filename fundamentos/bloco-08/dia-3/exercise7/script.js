const books = require('../books');

function authorWith3DotsOnName(books) {
    // escreva seu código aqui
    return books.find((book) => book.author.name === 'J. R. R. Tolkien').name;
};

console.log(authorWith3DotsOnName(books));