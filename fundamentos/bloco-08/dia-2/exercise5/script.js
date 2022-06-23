const books = require('../books');
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear < 2000);
};

console.log(everyoneWasBornOnSecXX());