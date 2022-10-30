const fs = require('fs').promises;
const path = require('path');

// Exercise 4
const readMovies = async () => {
  const moviesJson = await fs.readFile(path.join(__dirname, 'movies.json'));
  const movies = await JSON.parse(moviesJson);
  return movies;
};

// Exercise 7 
const writeMovie = async (movies) => {
  const strMovies = JSON.stringify(movies);
  await fs.writeFile(path.join(__dirname, 'movies.json'), strMovies); 
};

module.exports = { readMovies, writeMovie };
