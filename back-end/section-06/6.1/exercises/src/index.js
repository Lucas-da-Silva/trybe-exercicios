const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Book = require('./controllers/book.controller'); 

app.use(express.json());

app.get('/books', Book.getAll);  
app.get('/books/:id', Book.getById);
app.post('/books', Book.create);
app.put('/books/:id', Book.update);
app.delete('/books/:id', Book.remove);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
