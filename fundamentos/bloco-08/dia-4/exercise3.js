const books = require("./books");

function averageAge(books) {
  // escreva seu código aqui
  const ages = books.reduce((media, age) => {
    const calc = [age.releaseYear - age.author.birthYear];
    return media.concat(calc);
  }, []);
  const soma = ages.reduce((total, number) => total + number);
  return soma / ages.length;
}

console.log(averageAge(books));

const expectedResult = 43;
