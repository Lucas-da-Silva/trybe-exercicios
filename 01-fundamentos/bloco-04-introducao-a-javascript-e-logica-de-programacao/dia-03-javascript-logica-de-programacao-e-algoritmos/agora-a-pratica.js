// Crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;
let f = 1;

for (let cont = fatorial; cont > 0; cont -= 1) {
     f *= cont; 
    console.log(cont)
}

console.log("O fatorial de " + fatorial +" é " + f);

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.

let word = 'tryber';
let inverso = '';

for (let index = word.length - 1; index >= 0; index -= 1) [
    inverso += word[index]
]

console.log(inverso)

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = 0;
let nomeDoMaior = null;

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maior) {
        maior = array[index].length;
        nomeDoMaior = array[index]
    };
}

console.log("O elemento com mais caracteres é o " + nomeDoMaior + " que possui " + maior + " letras.")

// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = 0;

for (let numero = 2; numero <= 50; numero += 1)  {
    let ePrimo = true;
    
    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor === 0) {
            ePrimo = false;
            break;
        } 
    } 
    if (ePrimo === true && numero > maiorPrimo) {
        maiorPrimo = numero;
    }
}

console.log("O maior número primo entre 1 e 50 é " + maiorPrimo)