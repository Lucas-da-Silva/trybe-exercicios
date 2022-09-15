const books = require('./books');
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  let sameYear = true;
  books.sort((a, b) => {
    if(a.author.birthYear === b.author.birthYear) {
        sameYear = false;
    }
  })
  return sameYear;
}

books.forEach((element) => {
    books.forEach((secondElement, index) => {
        if(element.author.birthYear === secondElement.author.birthYear[index + 1]) {
            return false;
        }  
    })
})

console.log(authorUnique());