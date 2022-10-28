const fs = require('fs').promises;

async function readSimpsons() {
  const jsonSimpsons = await fs.readFile('./simpsons.json', 'utf-8'
    );
  const simpsons = JSON.parse(jsonSimpsons);
  
  return simpsons;
}

const readSimpsonFamily = async () => {
  const jsonSimpsonFamily = await fs.readFile(
    './simpsonFamily.json',
    'utf-8'
  );
  const simpsonFamily = JSON.parse(jsonSimpsonFamily);

  return simpsonFamily;
}

module.exports = { readSimpsons, readSimpsonFamily };