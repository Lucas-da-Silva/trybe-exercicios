const randomNumber = () => Math.floor(Math.random() * 100 + 1);
const upperString = (string) => string.toUpperCase();
const firstLetter = (string) => string[0];
const concatTwoStrings = (firstString, secondString) =>
  firstString.concat(secondString);
const dogPicturesFetch = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

module.exports = {
  randomNumber,
  upperString,
  firstLetter,
  concatTwoStrings,
  dogPicturesFetch,
};
