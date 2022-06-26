const books = require('./books');

function nameAndAge() {
    // escreva seu código aqui
    const authorsAndAge = books.map((element) => ( { age: element.releaseYear - element.author.birthYear, author: element.author.name } ));
    authorsAndAge.sort((a, b) => a.age - b.age);
    return authorsAndAge;
};

console.log(nameAndAge());