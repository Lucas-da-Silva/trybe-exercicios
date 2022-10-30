const express = require('express');
const { readMovies, writeMovie } = require('./utilsFunctions');

const app = express();

app.use(express.json());

// Exercise 5
app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const movie = movies.find((film) => film.id === Number(id));

  res.status(200).json(movie);
});

// Exercise 6
app.get('/movies', async (req, res) => {
  const movies = await readMovies();
  res.status(200).json(movies);
});

//Exercise 7
app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const movies = await readMovies();
  const newMovie = { id: movies.length + 1, movie, price };

  movies.push(newMovie);
  await writeMovie(movies);

  res.status(201).json(newMovie);
});

// Exercise 8
app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const movies = await readMovies();
  const movieIndex = movies.findIndex((film) => film.id === Number(id));

  if (movieIndex === -1) return res.status(404).json({ message: 'Movie not found.' });

  movies[movieIndex] = { id: Number(id), movie, price };
  await writeMovie(movies);

  res.status(200).json(movies[movieIndex]);
});

// Exercise 9
app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const movieIndex = movies.findIndex((movie) => movie.id === Number(id));

  if (movieIndex === -1) return res.status(404).json({ message: 'Movie not found.' });
  
  movies.splice(movieIndex, 1);
  await writeMovie(movies);

  res.status(200).end();
});

// Exercise 10
app.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  const movies = await readMovies();
  const filteredMovies = movies.filter(({ movie }) => movie.includes(q));

  res.status(200).json(filteredMovies);
});

module.exports = app;
