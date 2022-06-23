const books = require('../books');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990);
};

console.log(someBookWasReleaseOnThe80s());
