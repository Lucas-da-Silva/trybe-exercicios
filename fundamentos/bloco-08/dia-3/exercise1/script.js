const books = require('../books');

function formatedBookNames() {
    // escreva seu código aqui
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

console.log(formatedBookNames());