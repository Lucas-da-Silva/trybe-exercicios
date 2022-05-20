// Exercício 1

function selectP() { 
    let paragraph = document.querySelectorAll("p")[1];
    paragraph.innerText = "Espero que eu esteja trabalhando com programação, e tenha um futuro promissor.";
}

selectP()

// Exercício 2

function changeColorYellow() {
    let colorTrybe = document.querySelector(".main-content");
    colorTrybe.style.backgroundColor = "rgb(76,164,109)" 
}

changeColorYellow()

//Exercício 3

function changeColorRed() {
    let ColorWhite = document.querySelector(".main-content .center-content");
    ColorWhite.style.backgroundColor = "white";
}

changeColorRed()

// Exercício 4

function correctText() {
    let textH1 = document.querySelector("h1")
    textH1.innerText = "Exercício 5.1 - JavaScript"
}

correctText()

// Exercício 5

function upperCase() {
    let textUpper = document.querySelectorAll("p")
    for (let upperCase of textUpper) {
        upperCase.innerText = upperCase.innerText.toUpperCase();
      }
    
}
 
upperCase();

// Exercício 6

function allText() {
    let allP = document.querySelectorAll("p")
    for (let all of allP) {
        console.log(all.innerText);

    }
}

allText()