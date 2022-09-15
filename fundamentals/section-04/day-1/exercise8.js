const a = 7;
const b = 6;

function maior (n1, n2) {

    if (n1 > n2) { 
        return n1 + " é maior que o " + n2;
    } else if (n1 == n2) {
        return 'Os dois números são iguais'
    } else {
        return n2 + " é maior que " + n1;
    };
};

console.log(maior(a, b))