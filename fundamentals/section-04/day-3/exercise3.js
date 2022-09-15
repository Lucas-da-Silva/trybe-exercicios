let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = 0;
let nomeDoMaior = null;
let menor = 100;
let nomeDoMenor = null;

// Algoritmo para maior
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maior) {
        maior = array[index].length;
        nomeDoMaior = array[index];
    };
}

//Algoritmo para menor
for(let index = 0; index < array.length; index += 1) {
    if(array[index].length < menor) {
        menor = array[index].length;
        nomeDoMenor = array[index];
    }
}

console.log("O elemento com mais caracteres é o " + nomeDoMaior + " que possui " + maior + " letras.");

console.log("O elemento com menos caracteres é o " + nomeDoMenor + " que possui " + menor + " letras.");



