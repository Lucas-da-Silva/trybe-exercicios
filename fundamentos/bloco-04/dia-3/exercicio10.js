let testePrimo = 3;
let ehPrimo = true;

for (let numeros = 2; numeros < testePrimo; numeros += 1) {
    
    if (testePrimo % numeros === 0) {
        ehPrimo = false;
        break;
    }    
}

console.log("É primo:", ehPrimo)