const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    let fatorial = n;
    let multiplicacao = 1;
    for (let index = n - 1; index > 0; index -= 1) {
      fatorial = `${fatorial} * ${index}`;
      multiplicacao = multiplicacao * (index + 1);
    }
    let fatorialCompleto = `${n}! =  ${fatorial} = ${multiplicacao}`;
    return fatorialCompleto;
};
  
console.log(factorial(4));