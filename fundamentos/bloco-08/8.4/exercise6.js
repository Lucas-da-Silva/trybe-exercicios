const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(students, grades) {
  // escreva seu código aqui
  return students.map((name, index) => (
    { name: name, average: grades[index].reduce((array, number) => total = array + number) / 5}
  ));
};

console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
