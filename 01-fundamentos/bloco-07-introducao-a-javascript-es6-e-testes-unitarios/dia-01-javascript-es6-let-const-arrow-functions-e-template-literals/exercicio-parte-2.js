// 1- Crie uma função que receba um número e retorne seu fatorial.
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

// 2- Crie uma função que receba uma frase e retorne qual a maior palavra
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

// 3- 🚀 Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const button = document.querySelector("#button");
const count = document.querySelector("#count");
let clickCount = 0;
button.addEventListener("click", () => {
  clickCount += 1;
  count.innerHTML = `Quantidade de Clicks: ${clickCount}`;
});

// 4- 🚀 Crie um código JavaScript com a seguinte especificação:

// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
const trocarX = (string) => `Trybe ${string} aqui!`;
console.log(trocarX("Lucas"));

// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
const minhasSkills = ['Unix', 'Linux', 'HTML', 'CSS', 'JavaScript']

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
const stringCompleta = (string, skills) => {
  const junto = `${string}
Minhas cinco principais habilidades são:
- ${skills[0]};
- ${skills[1]};
- ${skills[2]};
- ${skills[3]};
- ${skills[4]};
#goTrybe`
  return junto;
}

console.log(stringCompleta(trocarX("Lucas"), minhasSkills.sort()));