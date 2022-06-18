const button = document.querySelector("#button");
const count = document.querySelector("#count");
let clickCount = 0;
button.addEventListener("click", () => {
  clickCount += 1;
  count.innerHTML = `Quantidade de Clicks: ${clickCount}`;
});