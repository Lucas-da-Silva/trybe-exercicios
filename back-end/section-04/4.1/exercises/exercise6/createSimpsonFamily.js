const fs = require('fs').promises;
const { readSimpsonFamily } = require('./readFiles');

async function createSimpsonFamily() {
  try {
    const simpsonFamily = await readSimpsonFamily();
    const newSimpsons = simpsonFamily.filter(({ id }) => id == 1 || id == 4);
    
    fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
  } catch (error) {
    console.log(error);
  }
}

createSimpsonFamily();
