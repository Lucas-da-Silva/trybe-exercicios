const fs = require('fs').promises;
const { readSimpsonFamily } = require('./readFiles');

async function addPersonSimpsonFamily() {
  try {
    const simpsonFamily = await readSimpsonFamily();
    const newSimpsonFamily = [
      ...simpsonFamily,
      { id: '8', name: 'Nelson Muntz' },
    ];

    fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonFamily));
  } catch (error) {
    console.log(error);
  }
}

addPersonSimpsonFamily();
