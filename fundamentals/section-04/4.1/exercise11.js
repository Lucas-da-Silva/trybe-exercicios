const anguloInterno1 = 50;
const anguloInterno2 = 90;
const anguloInterno3 = 30;

function triangulo (param1, param2, param3) {
    if (param1 + param2 + param3 === 180) {
        return true;
    } else if (param1 < 0 || param2 < 0 || param3 < 0) {
        return "ERRO";
    } else {
        return false;
    };    
};


console.log(triangulo(anguloInterno1, anguloInterno2, anguloInterno3));