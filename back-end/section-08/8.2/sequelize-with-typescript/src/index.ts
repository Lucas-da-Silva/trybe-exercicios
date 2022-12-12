import sequelize, { Sequelize } from 'sequelize';
import Authors from './database/models/AuthorModel';
import Books from './database/models/BookModel';

(async () => {
  const authors = await Authors.findAll({
    include: { model: Books, as: 'books', attributes: [] },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: [[Sequelize.literal('totalBooks'), 'DESC']],
    raw: true,
  });

  console.log(authors);
  process.exit(0);
})();
