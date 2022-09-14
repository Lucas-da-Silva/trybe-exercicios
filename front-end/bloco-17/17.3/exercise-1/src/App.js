import React, { useEffect, useState } from 'react';
import FavoriteAnimal from './FavoriteAnimal';
import Greeting from './Greeting';

function App() {  
  const [name, setName] = useState(window.localStorage.getItem('name') || '');
  const [animal, setAnimal] = useState(window.localStorage.getItem('animal') || '');
  
  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  
  useEffect(() => {
    window.localStorage.setItem("animal", animal);
  }, [animal]);

  return (
    <form>
      <Greeting name={name} onNameChange={setName} />
      <FavoriteAnimal animal={ animal } onAnimalChange={ setAnimal } />
      <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
    </form>
  );
}

export default App;
