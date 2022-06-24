const books = require('../books');

function oldBooks(books) {
    // escreva seu código aqui
    return books.filter((book) => (2022 - book.releaseYear) > 60).map((book) => book.name);
};

console.log(oldBooks(books))