// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);

console.log(sum(5, 6, 7, 8, 2, 3, 4, 1));