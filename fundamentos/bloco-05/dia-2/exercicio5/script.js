let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

let sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter)

let p = document.createElement('p');
p.innerText = 'To meio cansado, já é tarde, mas sigo firme e forte para fazer tudo hoje :)'
sectionCenter.appendChild(p);

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

let img = document.createElement('img');
img.src='https://picsum.photos/200';
img.className = 'small-image';
sectionLeft.appendChild(img);

let ul = document.createElement('ul');
sectionRight.appendChild(ul);

let numeros = ['Um', 'dois', 'Um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

function listaNumeros (numero) {
    for (let index = 0; index < numero.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = numero[index]
    ul.appendChild(li);
    }
    return listaNumeros
}

let primeiroH3 = document.createElement('h3');
let segundoH3 = document.createElement('h3');
let terceiroH3 = document.createElement('h3');

main.appendChild(primeiroH3);
main.appendChild(segundoH3);
main.appendChild(terceiroH3);

// #1
h1.className = 'title';

// #2
primeiroH3.className = 'description';
segundoH3.className = 'description';
terceiroH3.className = 'description';

// #3
main.removeChild(sectionLeft);

// #4
sectionRight.style.marginRight = 'auto';

// #5
sectionCenter.style.backgroundColor = 'green';

// #6
numeros = ['Um', 'dois', 'Um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito'];
listaNumeros(numeros);