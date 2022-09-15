const books = require('./books');

function authorWith3DotsOnName(books) {
    // escreva seu código aqui
    return books.filter((book) => book.author.name.includes('J. R. R.'))[0].name;
};

console.log(authorWith3DotsOnName(books));