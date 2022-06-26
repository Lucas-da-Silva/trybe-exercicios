const books = require('./books');

function longestNamedBook(books) {
    // escreva seu código aqui
    return books.reduce((maior, name) => maior.name.length > name.name.length ? maior : name);
};

console.log(longestNamedBook(books));

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
};
