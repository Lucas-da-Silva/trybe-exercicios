const fs = require('fs').promises;

async function createSimpsonFamily() {
  try {
    const jsonSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const oldSimpsons = JSON.parse(jsonSimpsons);

    const newSimpsons = oldSimpsons.filter(({ id }) => id == 1 || id == 4);
    fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
  } catch (error) {
    console.log(error);
  }
}

createSimpsonFamily();
