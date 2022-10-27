const fs = require('fs').promises;

async function changePersonSimpsonFamily() {
  try {
    const jsonSimpsonFamily = await fs.readFile(
      './simpsonFamily.json',
      'utf-8'
    );
    const oldSimpsonFamily = JSON.parse(jsonSimpsonFamily);
    const filteredSimpsonFamily = oldSimpsonFamily.filter(({ name }) => name !== 'Nelson Muntz');

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