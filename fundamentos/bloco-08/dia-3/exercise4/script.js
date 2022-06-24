const books = require('../books')

function oldBooksOrdered(books) {
    // escreva seu código aqui
    return books.filter((book) => (2022 - book.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered(books));