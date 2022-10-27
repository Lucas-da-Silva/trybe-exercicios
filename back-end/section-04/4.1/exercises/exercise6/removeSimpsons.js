const fs = require('fs').promises;

async function removeSimpsons() {
  try {
    const jsonSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const oldSimpsons = JSON.parse(jsonSimpsons);

    const newSimpsons = oldSimpsons.filter(({ id }) => id != 10 && id != 6);
    fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
  } catch (error) {
    console.log(error);
  }
}

removeSimpsons();
