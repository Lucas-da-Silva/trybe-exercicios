const valor = -1;

function positiveNegative (n) {
    if (n > 0) {
        return "positive";
    } else if (n === 0) {
        return "zero";
    } else {
        return "negative";
    };
};

console.log(positiveNegative(valor));