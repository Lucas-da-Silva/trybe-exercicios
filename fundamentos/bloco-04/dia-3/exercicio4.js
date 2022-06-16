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