// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
// Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
// Utilize o console.log() para imprimir as constantes e variáveis que você criou.
// Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

const myName = "Lucas";
const birthCity = "Macapá";
let birthYear = 2001;
birthYear = 2030;
birthCity = "São Paulo";

console.log(myName);
console.log(birthCity);
console.log(birthYear);
//Dá erro porque não é possivel alterar uma constante.

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

// Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

const base = 5;
const height = 8;
const area = base * height

console.log(area)

const perimeter = base + base + height

console.log(perimeter)

// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
    // Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
    // Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
    // Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam;

const nota = 80;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovada(o)");
}

// Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
// Implemente condicionais para que:
// Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
// Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
// Agora imprima a variável message fora das suas condições.

const currentHour = 12;
let message = null;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    messsage = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}

console.log(message)

// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// Implemente condicionais para que:
    // Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
    // Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
 
let weekDay = "Domingo"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feria"){
     console.log("Oba, mais um dia de aprendizado na Trybe >:D")
 } else {
     console.log("FINALMENTE, descando merecido UwU")
 }

// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.

let estado = "lista"

switch (estado) {
    case "aprovada":
        console.log("aprovada");
        break;
    case "lista":
        console.log("lista");
        break;
    case "reprovada":
        console.log("reprovada");
        break;
    default: 
        console.log("não se aplica");
}