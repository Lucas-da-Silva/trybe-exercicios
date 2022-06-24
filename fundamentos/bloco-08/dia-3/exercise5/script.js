const books = require('../books');

function fantasyOrScienceFictionAuthors(books) {
    // escreva seu código aqui
    return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((book) => book.author.name).sort();
};

console.log(fantasyOrScienceFictionAuthors(books));