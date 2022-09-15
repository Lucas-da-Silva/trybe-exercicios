const numero1 = 4;
const numero2 = 1;
const numero3 = 8;

function maior (n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else if (n3 > n1 && n3 > n2) {
        return n3;
    };
};

console.log(maior(numero1, numero2, numero3))