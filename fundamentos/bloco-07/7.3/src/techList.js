function techList(tecnologias, nome) {
    let array = [];
    if (tecnologias.length === 0) {
      return 'Vazio!';
    }
    let tecnologia = tecnologias.sort();
  
    for (let index = 0; index < tecnologias.length; index += 1) {
      array.push({
        tech: tecnologia[index],
        name: nome,
      });
    }
    return array;
}

module.exports = techList;