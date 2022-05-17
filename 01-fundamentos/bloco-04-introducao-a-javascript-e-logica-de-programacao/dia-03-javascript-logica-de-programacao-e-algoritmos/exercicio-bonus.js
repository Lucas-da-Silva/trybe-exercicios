// Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 4;
let aux = '';

for (let linha = 1; linha <= n; linha += 1) {
    for(let coluna = 1; coluna <= n; coluna += 1) {
        aux += '*'
    }
    console.log(aux);
    aux = '';
}

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

let numero = 5;
let asteriscos = '';

for (let linha = 1; linha <= numero; linha += 1) {
    // console.log(l)
    for (let coluna = 1; coluna <= numero; coluna += 1){
    if (linha == coluna) {
        asteriscos += "*"
    }
    }
    console.log(asteriscos)
}

// Agora inverta o lado do triângulo.
// Incompleto

let n1 = 5;
let a = '';
let espaco = 0;
let espacoEsquerda = '';

for (let linha = 1; linha <= n1; linha += 1) {

    for (let coluna = 1; coluna <= n1; coluna += 1){
        if (linha == coluna) {
            a += "*"
    }
        if (a.length < n1) {
            espaco = n1 - a.length
            console.log(espaco)
            //for (let possiveisEspacos = 0; possiveisEspacos < espaco; possiveisEspacos += 1)
            //espacoEsquerda += ' ';
        }
    }
    console.log(espacoEsquerda + a)
}


// Depois, faça uma pirâmide com n asteriscos de base:
//Incompleto

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
//Incompleto

// Faça um programa que diz se um número definido numa variável é primo ou não.

let testePrimo = 4;
let ehPrimo = true;

for (let numeros = 2; numeros < testePrimo; numeros += 1) {
    
    if (testePrimo % numeros === 0) {
        ehPrimo = false;
        break;
    }    
}

console.log("É primo:", ehPrimo)