const valorVenda = 130;
const custo = 100;
let custoTotal = custo * 1.20 // imposto de 20%
let lucro = valorVenda - custoTotal
if (valorVenda < 0 || custo < 0) {
    console.log("Erro!");
} else{
    console.log("O lucro da venda de mil produtos é: R$", lucro * 1000);
}