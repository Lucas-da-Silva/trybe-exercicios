const readline = require('readline-sync');
const { readSimpsons } = require('./readFiles');

async function readSimpsonsId() {
  try {
    const simpsons = await readSimpsons();
    const id = readline.questionInt('What is the character id? ');
    const simpson = simpsons.find((person) => person.id == id);

    console.log(`${simpson.id} - ${simpson.name}`);
  } catch (error) {
    console.log(error);
  }
}

readSimpsonsId();
