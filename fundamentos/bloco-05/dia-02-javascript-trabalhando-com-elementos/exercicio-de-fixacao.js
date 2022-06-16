// 1- Acesse o elemento elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta");

// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "red";

// 3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector("#primeiroFilhoDoFilho").innerText = "Aiai, será que me lembro?";

// 4- Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").firstElementChild;

// 5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").previousElementSibling;

// 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextSibling;

// 7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

// 8- Agora acesse o terceiroFilho a partir de pai.
document.querySelector("#pai").lastElementChild.previousElementSibling

// 1- Crie um irmão para elementoOndeVoceEsta.

let pai = document.querySelector("#pai")
let irmaoDoElemento = document.createElement('section');
irmaoDoElemento.innerText = "Tentando criar!!!";

pai.appendChild(irmaoDoElemento);

// 2- Crie um filho para elementoOndeVoceEsta.

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoDoElemento = document.createElement('section');
filhoDoElemento.innerText = "Oi, sou o filho do elementoOndeVoceEsta";

elementoOndeVoceEsta.appendChild(filhoDoElemento);

// 3- Crie um filho para primeiroFilhoDoFilho.

let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
let filhoDoFilhoDoFilho = document.createElement('article');
filhoDoFilhoDoFilho.innerText = 'Prazer, sou filho do filho do filho do filho do filho.';

primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

// 4 - A partir desse filho criado, acesse terceiroFilho.

document.querySelector('article').parentElement.parentElement.nextElementSibling

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilho);
pai.removeChild(quartoEUltimoFilho);
pai.removeChild(irmaoDoElemento);

let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);
elementoOndeVoceEsta.removeChild(filhoDoElemento);


