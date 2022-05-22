// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

// 2- Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter)

// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let p = document.createElement('p');
p.innerText = 'To meio cansado, já é tarde, mas sigo firme e forte para fazer tudo hoje :)'
sectionCenter.appendChild(p);

// 5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

// 6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let img = document.createElement('img');
img.src='https://picsum.photos/200';
img.className = 'small-image';
sectionLeft.appendChild(img);

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

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

// 9- Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

let primeiroH3 = document.createElement('h3');
let segundoH3 = document.createElement('h3');
let terceiroH3 = document.createElement('h3');

main.appendChild(primeiroH3);
main.appendChild(segundoH3);
main.appendChild(terceiroH3);

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 1- Adicione a classe title na tag h1 criada;

h1.className = 'title';

// 2- Adicione a classe description nas 3 tags h3 criadas;

primeiroH3.className = 'description';
segundoH3.className = 'description';
terceiroH3.className = 'description';

// 3- Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

main.removeChild(sectionLeft);

// 4- Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

sectionRight.style.marginRight = 'auto';

// 5- Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

sectionCenter.style.backgroundColor = 'green';

// 6 - Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

numeros = ['Um', 'dois', 'Um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito'];
listaNumeros(numeros);