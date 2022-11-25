const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    if (author) {
      const books = await BookService.getByAuthor(author);
      return res.status(200).json(books);
    };

    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'An error has occurred' });
  }
}; 

const getById = async (req, res) => {
    const { id } = req.params; 
    const book = await BookService.getById(id);
    if(!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body; 
  try {
    const newBook = await BookService.create(title, author, pageQuantity, publisher);
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Error, book is not add' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const updatedBook = await BookService.update(id, req.body);
  if (!updatedBook) return res.status(404).json({ message: 'Book not found!' });
  return res.status(200).json({ message: 'Book updated!' })
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await BookService.remove(id);
    return res.status(200).end();
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
