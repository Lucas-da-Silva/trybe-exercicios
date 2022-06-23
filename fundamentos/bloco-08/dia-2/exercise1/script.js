const books = require('../code');

function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((element) => element.author.birthYear === 1947);
};

console.log(authorBornIn1947());