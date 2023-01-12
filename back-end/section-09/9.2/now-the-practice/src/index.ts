import Person from './Person';
import Subject from './Subject';
import Teacher from './Teacher';
import Student from './Student';

const firstPerson = new Person('Joke', new Date('07/02/1970'));
const secondPerson = new Person('Batman', new Date('03/20/1940'));

console.log('------ Persons ------');
console.log(`${firstPerson.name}`);
console.log(`${secondPerson.name}`);
console.log('----------------------');

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

console.log('------ Students ------');
[carolina, lucas, jessica, tamires, fernando].forEach(({ name, enrollment, sumAverageGrade }) => {
  console.log(`${enrollment} | ${name}`);
});
console.log('----------------------');

const mathematics = new Subject('Mathematics');
const history = new Subject('History');
const philosohy = new Subject('Philosophy');

console.log('------ Subjects ------');
console.log(mathematics.name);
console.log(history.name);
console.log(philosohy.name);
console.log('----------------------');

const felipe = new Teacher('Felipe', new Date('12/03/1980'), 2000, mathematics); 
const tim = new Teacher('Tim', new Date('10/06/1990'), 2500, history); 
const bill = new Teacher('Bill', new Date('01/20/1990'), 1800, philosohy);

console.log('------ Teachers ------');
console.log(felipe);
console.log(tim);
console.log(bill);
console.log('----------------------');
