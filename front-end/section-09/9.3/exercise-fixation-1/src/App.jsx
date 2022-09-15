import React, { useEffect, useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    setTimeout(() => {
      const generatedNumber = Math.floor(Math.random() * 100);
      setRandomNumber(generatedNumber);
    }, 10000);
  });

  useEffect(() => {
    const hitElement = document.getElementById('hit');
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      hitElement.innerHTML = 'Acerto';
      setTimeout(() => {
        hitElement.innerHTML = '';
      }, 4000);
    }
  }, [randomNumber]);

  return (
    <div className="App">
      <h1>Gerador de números aleatórios</h1>
      <p>Número aleatório: {randomNumber ? randomNumber : 'gerando o número...'}</p>
      <p id="hit" />
    </div>
  );
}

export default App;
