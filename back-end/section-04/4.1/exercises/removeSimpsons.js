const fs = require('fs').promises;

async function readSimpsonsId() {
  try{
    const jsonSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(jsonSimpsons);

    const id = readline.questionInt('What is the character id? ');
    const simpson = simpsons.find((person) => person.id == id);

    console.log(`${simpson.id} - ${simpson.name}`);
  } catch(error) {
    console.log(error);
  }
}

readSimpsonsId();