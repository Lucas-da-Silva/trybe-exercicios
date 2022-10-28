const { readSimpsons: readFile } = require('./readFiles');

async function readSimpsons() {
  try{
    const simpsons = await readFile();
    
    simpsons.forEach(({id, name}) => {
      console.log(`${id} - ${name}`)
    });
  } catch(error) {
    console.log(error);
  }
}

readSimpsons();