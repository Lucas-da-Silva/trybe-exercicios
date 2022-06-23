const books = require('../code');
// Retorne o nome do livro de menor nome.

function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    let menorString = 'aaaaaaaaaaaaaaaaaaaa';
    books.forEach((element) => {
        if(element.name.length < menorString.length){
            nameBook = element;
        };
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

console.log(smallerName());