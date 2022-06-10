const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

let newKey = "lastName";
const lastName = "Ferreira";
customer[newKey] = lastName;
console.log(customer);
newKey = "fullName";
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const adiciona = (objeto, nomeChave, valorV) => {
  const nome = nomeChave;
  const valor = valorV;
  objeto[nome] = valor;
  return objeto;
};

const eu = {
  firstName: "Lucas",
  age: 20,
  job: "Student",
};

console.log(adiciona(eu, "hobby", "Video Game"));

// Teste pessoal, usando Object.keys e Object.values para printar a chave e seu valor referente
const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const listSkills = (object) => {
  const arrayKeys = Object.keys(object);
  const arrayValues = Object.values(object);
  for (let index = 0; index < arrayKeys.length; index += 1) {
    console.log(`${arrayKeys[index]}, Nível: ${arrayValues[index]}`);
  }
};

listSkills(student1);

// Teste para amazenar o valor de dois objetos em um novo
const person = {
  name: "Roberto",
};

const lastName = {
  lastName: "Silva",
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = "Gilberto";
console.log(newPerson);
console.log(person);
