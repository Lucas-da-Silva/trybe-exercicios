const books = require('../code');
const book = require('../code');

const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
};

// Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
    // escreva seu código aqui
    return books.find((element) => element.name.length === 26);
};

console.log(getNamedBook());