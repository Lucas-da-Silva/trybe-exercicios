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