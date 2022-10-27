const fs = require('fs').promises;
const path = require('path');

async function readSimpsons() {
  try{
    const jsonSimpsons = await fs.readFile('./simpsons.json', 'utf-8'
    );
    const simpsons = JSON.parse(jsonSimpsons);
    
    simpsons.forEach(({id, name}) => {
      console.log(`${id} - ${name}`)
    });
  } catch(error) {
    console.log(error);
  }
}

readSimpsons();