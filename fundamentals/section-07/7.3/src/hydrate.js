function hydrate(string) {
    let reg = /\d+/g;
    let result = string.match(reg);
    let soma = 0;
    for(let index = 0; index < result.length; index += 1) {
      soma = soma + parseInt(result[index]);
    }
    if(soma === 1) {
      return `1 copo de água`
    }
    return `${soma} copos de água`;
}

module.exports = hydrate;