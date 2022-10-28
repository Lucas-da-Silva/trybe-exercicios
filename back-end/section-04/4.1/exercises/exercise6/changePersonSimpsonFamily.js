const fs = require('fs').promises;
const { readSimpsonFamily } = require('./readFiles');

async function changePersonSimpsonFamily() {
  try {
    const simpsonFamily = await readSimpsonFamily();
    const filteredSimpsonFamily = simpsonFamily.filter(({ name }) => name !== 'Nelson Muntz');
    const newSimpsonFamily = [
      ...filteredSimpsonFamily,
      { id: '5', name: 'Maggie Simpson' },
    ];

    fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonFamily));
  } catch (error) {
    console.log(error);
  }
}

changePersonSimpsonFamily();