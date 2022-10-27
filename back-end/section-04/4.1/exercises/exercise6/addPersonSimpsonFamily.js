const fs = require('fs').promises;

async function addPersonSimpsonFamily() {
  try {
    const jsonSimpsonFamily = await fs.readFile(
      './simpsonFamily.json',
      'utf-8'
    );
    const oldSimpsonFamily = JSON.parse(jsonSimpsonFamily);

    const newSimpsonFamily = [
      ...oldSimpsonFamily,
      { id: '8', name: 'Nelson Muntz' },
    ];
    fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonFamily));
  } catch (error) {
    console.log(error);
  }
}

addPersonSimpsonFamily();
