const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// #2
function addClass(event) {
    const techClass = document.querySelector('.tech');
    techClass.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
  }
  
firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);

// #3
input.addEventListener('input', changeInput);

function changeInput(event) {
    const techClass = document.querySelector('.tech');
    techClass.innerText = event.target.value;
}

// #4
myWebpage.addEventListener('dblclick', doubleClick);
function doubleClick() {
    myWebpage = window.location.href = "https://lucas-da-silva.github.io";
}

// #5
myWebpage.addEventListener('mouseover', mouseOver);
myWebpage.addEventListener('mouseleave', mouseLeave);

function mouseOver() {
    myWebpage.style.color = 'red';
}

function mouseLeave() {
    myWebpage.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.