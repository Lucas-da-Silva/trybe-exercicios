// 1- Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome (string) {
    let inverso = string.split("").reverse().join("");
    if (string === inverso) {
        return true;
    } else {
        return false;
    };
};

console.log(verificaPalindrome("arara"));

// 2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorValor (array) {
    let maior = 0;
    
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > maior) {
            maior = index;
        }
    }
    return maior
}

let arrayNumeros = [2, 3, 6, 7, 10, 1];
console.log(maiorValor(arrayNumeros));

// 3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorValor (array) {
    let menor = 0;
    
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] < menor) {
            maior = index;
        }
    }
    return maior
}

let arrayNumeros2 = [2, 4, 6, 7, 10, 0, -3];
console.log(menorValor(arrayNumeros2));

// 4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function nomeMaior (array) {
    let maior = 0;
    
    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > maior && array[index].length > array[index + 1].length) {
            maior = array[index];
        }    
    }
    return maior
}

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(nomeMaior(arrayNomes));

// 5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

// 6- Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

// 7- Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false
