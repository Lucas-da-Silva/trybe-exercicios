// #1
let pai = document.querySelector("#pai")
let irmaoDoElemento = document.createElement('section');
irmaoDoElemento.innerText = "Tentando criar!!!";

pai.appendChild(irmaoDoElemento);

// #2
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoDoElemento = document.createElement('section');
filhoDoElemento.innerText = "Oi, sou o filho do elementoOndeVoceEsta";

elementoOndeVoceEsta.appendChild(filhoDoElemento);

// #3
let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
let filhoDoFilhoDoFilho = document.createElement('article');
filhoDoFilhoDoFilho.innerText = 'Prazer, sou filho do filho do filho do filho do filho.';

primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

// #4
document.querySelector('article').parentElement.parentElement.nextElementSibling