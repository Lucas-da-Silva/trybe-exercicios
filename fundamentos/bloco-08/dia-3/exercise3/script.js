const books = require('../books');
  
function fantasyOrScienceFiction(books) {
    // escreva seu código aqui
    return books.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
}

console.log(fantasyOrScienceFiction(books));