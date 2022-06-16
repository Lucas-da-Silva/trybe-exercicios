let n = 5;
let aux = '';

if(n > 1) {
    for (let linha = 1; linha <= n; linha += 1) {
        for(let coluna = 1; coluna <= n; coluna += 1) {
            aux += '*'
        }
        console.log(aux);
        aux = '';
    };
};