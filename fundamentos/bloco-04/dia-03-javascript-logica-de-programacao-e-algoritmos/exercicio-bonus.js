// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 4;
let aux = '';

for (let linha = 1; linha <= n; linha += 1) {
    for(let coluna = 1; coluna <= n; coluna += 1) {
        aux += '*'
    }
    console.log(aux);
    aux = '';
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

let numero = 5;
let asteriscos = '';

for (let linha = 1; linha <= numero; linha += 1) {
    
    for (let coluna = 1; coluna <= numero; coluna += 1){
        if (linha == coluna) {
        asteriscos += "*"
        }
    }
    console.log(asteriscos)
}

// 3- Agora inverta o lado do triângulo.

function invertido(n) {
    for (let index = 1; index <= n; index += 1) {
      let result = "";

      for (let espacosContador = 1; espacosContador <= n - index; espacosContador += 1) {
        result += " "
      }

      for (let asteristicosContador = 1; asteristicosContador <= index; asteristicosContador += 1) {
        result += "*"
      }

      console.log(result)
    }
  }

invertido(5);

// 4- Depois, faça uma pirâmide com n asteriscos de base:

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:


// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

let testePrimo = 3;
let ehPrimo = true;

for (let numeros = 2; numeros < testePrimo; numeros += 1) {
    
    if (testePrimo % numeros === 0) {
        ehPrimo = false;
        break;
    }    
}

console.log("É primo:", ehPrimo)