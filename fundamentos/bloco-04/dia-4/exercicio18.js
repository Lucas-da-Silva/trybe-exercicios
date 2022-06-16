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