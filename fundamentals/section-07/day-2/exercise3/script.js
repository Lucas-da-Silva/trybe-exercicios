const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// #1
const adiciona = (objeto, chave, valor) => {
  objeto[chave] = valor;
  return objeto;
};
console.log(adiciona(lesson2, "turno", "noite"));

// #2
const keys = (objeto) => Object.keys(objeto);
console.log(`As chaves do objeto selecionado são ${keys(lesson3)}`);

// #3
const lengthObject = (objeto) => Object.keys(objeto).length;
console.log(`O tamanho do objeto selecionado é ${lengthObject(lesson1)}`);

// #4
const values = (objeto) => Object.values(objeto);
console.log(`Os valores do objeto selecionado são ${values(lesson2)}`);

// #5

// #6

// #7

// #8