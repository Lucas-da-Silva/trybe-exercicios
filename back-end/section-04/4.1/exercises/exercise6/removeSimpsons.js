const fs = require('fs').promises;
const { readSimpsons } = require('./readFiles');

async function removeSimpsons() {
  try {
    const simpsons = await readSimpsons();
    const newSimpsons = simpsons.filter(({ id }) => id != 10 && id != 6);
    
    fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
  } catch (error) {
    console.log(error);
  }
}

removeSimpsons();
