// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = { // requisition specifications
    method: 'GET',
    headers: { 'Accept': 'application/json' }, 
  };
  
  const localJoker = document.querySelector('#jokeContainer');
  
  const joke = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => joke);

  localJoker.innerHTML = joke;
};

window.onload = () => fetchJoke();
