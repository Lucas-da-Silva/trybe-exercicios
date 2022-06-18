const maiorPalavra = (frase) => {
    let arrayFrase = frase.split(" ");
    let maiorPalavra = "";
    for (let index = 0; index < arrayFrase.length; index += 1) {
      if (arrayFrase[index].length > maiorPalavra.length) {
        maiorPalavra = arrayFrase[index];
      }
    }
    return maiorPalavra;
};
  
console.log(
    maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu")
);