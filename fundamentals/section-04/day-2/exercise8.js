let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]; 
}

let media = soma / numbers.length; 
console.log("A média do array é:", media);