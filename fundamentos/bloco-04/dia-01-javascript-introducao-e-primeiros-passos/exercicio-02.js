// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

const a = 8;
const b = 4;

//Adição (a + b)
function soma(elementoA, elementoB) {
    return a + b;
};

// Subtração (a - b)
function subtracao(elementoA, elementoB) {
    return a - b;
};

// Multiplicação (a * b)
function multiplicacao (elementoA, elementoB) {
    return a * b;
};

// Divisão (a / b)
function divisao (elementoA, elementoB) {
    return a / b;
};

// Módulo (a % b)
function modulo (elementoA, elementoB) {
    return a % b;
};

console.log(soma());
console.log(subtracao());
console.log(multiplicacao());
console.log(divisao());
console.log(modulo());

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const n1 = 7;
const n2 = 6;

function maior (elementoA, elementoB) {

    if (n1 > n2) { 
        return n1 + " é maior que o " + n2;
    } else if (n1 == n2) {
        return 'Os dois números são iguais'
    } else {
        return n2 + " é maior que " + n1;
    };
};

console.log(maior())

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numero1 = 4;
const numero2 = 1;
const numero3 = 8;

function maior (elemento1, elemento2, elemento3) {
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2;
    } else if (numero3 > numero1 && numero3 > numero2) {
        return numero3;
    };
};

console.log(maior())

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positiveNegative (param1) {
    if (valor > 0) {
        return "positive";
    } else if (valor === 0) {
        return "zero";
    } else {
        return "negative";
    };
};

const valor = -1;
console.log(positiveNegative(valor));

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangulo (param1, param2, param3) {
    if (param1 + param2 + param3 === 180) {
        return true;
    } else if (param1 < 0 || param2 < 0 || param3 < 0) {
        return "ERRO";
    } else {
        return false;
    };    
};

const anguloInterno1 = 50;
const anguloInterno2 = 90;
const anguloInterno3 = 30;

console.log(triangulo(anguloInterno1, anguloInterno2, anguloInterno3));

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrez = "Rei";
pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez) {
    case "torre":
        console.log("linha reta");
        break;
    case "bispo":
        console.log("diagonais");
        break;
    case "rei":
        console.log("qualquer direção, apenas uma casa");
        break;
    case "cavalo":
        console.log("um-dois ou em L");
        break;
    case "peão": 
        console.log("uma casa para frente");
        break;
    default:
        console.log("Erro! Peça inválida!");
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F

let notaPorcentagem = -1;

if (notaPorcentagem >= 90 && notaPorcentagem <= 100) {
    console.log("Sua nota é A");
} else if (notaPorcentagem >= 80) {
    console.log("Sua nota é B");
} else if (notaPorcentagem >= 70) {
    console.log("Sua nota é C");
} else if (notaPorcentagem >= 60) {
    console.log("Sua nota é D");
} else if (notaPorcentagem >= 50) {
    console.log("Sua nota é E");
} else if (notaPorcentagem < 50 && notaPorcentagem >= 0){
    console.log("Sua nota é F");
} else {
    console.log("Erro, nota inválida!");
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const n01 = 3;
const n02 = 5;
const n03 = 8;

if (n01 % 2 === 0 || n02 % 2 === 0 || n03 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const numero01 = 6;
const numero02 = 2;
const numero03 = 7;

if (numero01 % 2 != 0 || numero02 % 2 != 0 || numero03 % 2 != 0) {
    console.log(true);
} else {
    console.log(false);
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const valorVenda = 130;
const custo = 100;
let custoTotal = custo * 1.20 // imposto de 20%
let lucro = valorVenda - custoTotal
if (valorVenda < 0 || custo < 0) {
    console.log("Erro!");
} else{
    console.log("O lucro da venda de mil produtos é: R$", lucro * 1000);
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 3000.00;
let inss = null;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08 // 8% do salárioBruto
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09 // 9%
} else if (salarioBruto >= 2594.33 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11 // 11%
} else if (salarioBruto > 5.189,82) {
    inss = 570,88
} 

const salarioBase = salarioBruto - inss
let impostoDeRenda = null;

if (salarioBase <= 1903.98) {
    impostoDeRenda = 0
} else if (salarioBase >= 1903.99 && salarioBase <= 3751.05) {
    impostoDeRenda = (salarioBase * 0.075) - 142.80
} else if (salarioBase >= 2826,.66 && salarioBase <= 3751.05) {
    impostoDeRenda = (salarioBase * 0.15) - 354.80
} else if (salarioBase >= 3751.06 && salarioBase <= 4664,68) {
    impostoDeRenda = (salarioBase * 0.225) - 636,13
} else if (salarioBase > 3664.68) {
    impostoDeRenda = (salarioBase * 0.27) - 869.36
}

const salarioLiquido = salarioBase - impostoDeRenda
console.log("Salário liquido: R$",salarioLiquido);