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