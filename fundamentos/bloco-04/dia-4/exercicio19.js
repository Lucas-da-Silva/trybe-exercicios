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