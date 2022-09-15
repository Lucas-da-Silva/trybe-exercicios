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