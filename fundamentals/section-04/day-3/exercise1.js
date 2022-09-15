let fatorial = 10;
let f = 1;

for (let cont = fatorial; cont > 0; cont -= 1) {
     f *= cont; 
    console.log(cont)
}

console.log("O fatorial de " + fatorial +" é " + f);