let numero = 5;
let asteriscos = '';

for (let linha = 1; linha <= numero; linha += 1) {
    
    for (let coluna = 1; coluna <= numero; coluna += 1){
        if (linha == coluna) {
        asteriscos += "*"
        }
    }
    console.log(asteriscos)
}