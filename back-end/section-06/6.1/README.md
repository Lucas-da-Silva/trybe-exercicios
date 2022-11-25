# ORM - Application interface with the database

> The code in the [app-with-sequelize](./app-with-sequelize/) directory was developed during the class.

## Exercises - now the practice

### Instructions for performing the exercises
In this exercise we are going to create a simple API, where it will be possible to create a book or list all the books in the database. We are going to use MySQL as our database and Sequelize as our ORM.

### Project details
1. Create a new folder and start a project with Express:
```bash
npm init -y

npm install express
```

2. Create the `index.js` file;

3. Install the `sequelize` package and `mysql2`:

```bash
npm install sequelize mysql2
```

4. Install the `sequelize-cli` package as a development dependency:

```bash
npm install --save-dev sequelize-cli
```

5. Use `Sequelize-CLI` to start the ORM configuration:

```bash
npx sequelize-cli init
```

This command will generate the `models`, `seeder`, `config` and `migration` folders within your project.

6. Make sure you have a MySQL server running and put all the access settings inside the `config/config.js` file;

7. Change the `models/index.js` file to load the `config/config.js` file correctly;

8. Create the `index.js` file with the basic structure of an API with Express.

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
```

🚀 **Exercise 1:** Create a **migration** to create a books table with the following columns:

- `id`: must be of type `integer`, cannot be null and be the primary key of the auto-increment table;
- `title`: must be of type `string` and cannot be null;
- `author`: must be of type `string` and cannot be null;
- `pageQuantity`: must be of type `integer` and can be null;
- `createdAt`: must be of type `date` and cannot be null;
- `updatedAt`: must be of type `date` and cannot be null;

Note: the `down` method of the migration must be able to drop the table.

Note 2: Run the command `npx sequelize db:migrate` and verify that the table has been created before proceeding to the next exercises.

🚀 **Exercise 2:** Create the **Model** `Book` using the Sequelize API. The model must contain the following fields:

- `title`: must be of type `DateType.STRING`
- `author`: must be of type `DateType.STRING`
- `pageQuantity`: must be of type `DateType.INTEGER`
- `createdAt`: must be of type `DateType.DATE`
- `updatedAt`: must be of type `DateType.DATE`

In the next exercises you will develop an API using the **service** and **controller** layers.

---

### 🚀 Listing the books
**Exercise 3:** Create a `BooksService` **service** with the `getAll` method to return a list of books via the `Book` **model**.

**Exercise 4:** Create a `BooksController` **controller** with the `getAll` method being a middleware to return the list of books through the `getAll` method of `BookService`.

**Exercise 5:** Bind the `GET /books` route to access your controller.

---

### 🚀 Searching for a book by id
**Exercise 6:** In the `BooksService` **service** create a method `getById` that takes an `id` as a parameter and use the `Book` **model** to get that book. Return the object found by the **model**.

**Exercise 7:** In the `BooksController` **controller**, create the `getById` method as a middleware that receives the id as a route parameter and fetch the book through the **service**. If the book does not exist, the request response must have a status of `404` and the json `{ "message": "Book not found" }`.

**Exercise 8:** Bind the `GET /books/:id` route to access your **controller**.

---

### 🚀 Registering a book
**Exercise 9:** In the `BooksService` **service**, create a `create` method that receives an object with the attributes `title`, `author`, `pageQuantity` and save a new book using the `Book` **model**.

**Exercise 10:** In the `BooksController` **controller**, create the `create` method as a middleware that receives the `title`, `author`, `pageQuantity` attributes from the body of the request and save the data through the **service**.

**Exercise 11:** Bind the `POST /books` route to access your **controller**.

---

### 🚀 Editing a book
**Exercise 12:** In the `BooksService` **service**, create an `update` method that receives two parameters: the `id` of the book to be changed and an object with the attributes `title`, `author`, `pageQuantity` and update the book using the `Book` **model**.

**Exercise 13:** In the `BooksController` **controller**, create the `update` method as a middleware that receives the `id` as a route parameter and the `title`, `author`, `pageQuantity` attributes of the body of the request and save the data through the **service**. The request should return status `200` and the message 'Book updated!'. If the book is not found, return the message 'Book not found!'.

**Exercise 14:** Bind the `PUT route to /books/:id` to access your **controller**.

---

### 🚀 Removing a book
**Exercise 15:** In the `BooksService` **service**, create a `remove` method that receives the `id` of the book to be removed and remove it using the `Book` **model**.

**Exercise 16:** In the `BooksController` **controller** create the `remove` method being a middleware that receives the `id` as a route parameter and remove the book through the **service**.

**Exercise 17:** Bind the `DELETE route to /books/:id` to access your **controller**.

Test it in Thunder Client to see if the endpoint is functional.

- In case of an error, endpoints should return status code `500` with the message: 'Something went wrong'.

---

## Exercises - bonus

1. Create a `seeder` using `Sequelize-CLI`, populating your base with at least one book;
2. Create a `getByAuthor` method in `BooksService` to fetch a list of books by `author`;
3. Refactor the `getAll` method so that if a query string `author` is sent it will be able to get the list using the `getByAuthor` method of `BooksService`;
4. Refactor the `getAll` and `getByAuthor` methods so that the book list is sorted by title in alphabetical order;
5. Create a migration to add the `publisher` column to the `Books` table. Modify the service layers so that this field is used in registration and editing;
6. Write unit tests for the `model`;
7. Write unit tests for the created `service`, isolating the `models` layer.