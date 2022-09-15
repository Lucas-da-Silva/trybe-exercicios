const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA(names) {
  // escreva seu código aqui
  return names.reduce((totalA, string) => {
    return totalA + string.split('').filter((word) => word === 'a' || word === 'A').length;
  }, 0)
};

console.log(containsA(names));
