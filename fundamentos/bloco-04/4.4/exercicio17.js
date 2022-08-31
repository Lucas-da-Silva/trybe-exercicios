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