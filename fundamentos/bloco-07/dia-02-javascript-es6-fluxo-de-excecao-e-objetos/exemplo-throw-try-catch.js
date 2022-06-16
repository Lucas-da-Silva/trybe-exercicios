const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Os valores devem ser numéricos"); // Personalizou uma mensagem de erro
  }
};

const sum = (value1, value2) => {
  // Testa a função sum
  try {
    verifyIsNumber(value1, value2); // Verifica se é número
    return value1 + value2;
  } catch (error) {
    return error.message; // Caso o try não tenha êxito, vai retornar o catch que retorna uma mensagem de erro, que foi personalizada
  }
};

console.log(sum(2, "3"));
