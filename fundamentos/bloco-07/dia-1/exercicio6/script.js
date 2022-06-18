// function 1
const trocarX = (string) => `Trybe ${string} aqui!`;
console.log(trocarX("Lucas"));

// array global
const minhasSkills = ['Unix', 'Linux', 'HTML', 'CSS', 'JavaScript'];

// function 2
const stringCompleta = (string, skills) => {
    const junto = `${string}
  Minhas cinco principais habilidades são:
  - ${skills[0]};
  - ${skills[1]};
  - ${skills[2]};
  - ${skills[3]};
  - ${skills[4]};
  #goTrybe`
    return junto;
}
  
console.log(stringCompleta(trocarX("Lucas"), minhasSkills.sort()));