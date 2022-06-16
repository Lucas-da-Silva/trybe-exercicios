let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log(numbers);

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]; 
}

console.log("A soma de todos os números é igual a:",soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]; 
}

let media = soma / numbers.length; 
console.log("A média do array é:",media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log("Valor da média é maior que 20");
} else {
    console.log("Valor da média é menor ou igual a 20");
}

//  Utilizando for, descubra qual o maior valor contido no array e imprima-o;

maior = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index]; //conhecimentos prévios me ajudaram a fazer 
    }
}

console.log("O maior valor é:", maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

impar = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        impar += 1;
    }
}
if (impar === 0) {
    console.log("Nenhum valro ímpar encontrado");
} else {
    console.log("A quantidade de valores ímpares é:",impar)
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

menor = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menor) {
        menor = numbers[index]; 
    }
}

console.log("O menor valor é:", menor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado

console.log("Do número 1 ao 25:");

let arrayVazio = [];

for (let index = 1; index <= 25; index++) {
    arrayVazio.push(index);   
}

console.log(arrayVazio)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

console.log("A divisão por 2 dos números 1 ao 25:");

let arrayVazio2 = [];

for (let index = 1; index <= 25; index++) {
    arrayVazio2.push(index / 2);
}

console.log(arrayVazio2);