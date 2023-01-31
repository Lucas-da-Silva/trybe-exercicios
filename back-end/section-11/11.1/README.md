# MongoDB - Introduction

## Exercises - now, practice!

Using the [`bios`](https://www.mongodb.com/docs/manual/reference/bios-example-collection/) collection, build queries to return the following items:

[**Exercise 1**](./exercises/exercise01.mongodb): Return the document with `_id` equal to 8.

[**Exercise 2**](./exercises/exercise02.mongodb): Return the document with `_id` equal to 8, but only display the attributes: `_id` and `name`.

🚀 [**Exercise 3**](./exercises/exercise03.mongodb): Return only the `name` and `birth` attributes of the document with `_id` equal to 8.

[**Exercise 4**](./exercises/exercise04.mongodb): Return all documents where the `name.first` attribute is equal to John, using the `pretty()` method.

[**Exercise 5**](./exercises/exercise05.mongodb): Return the first 3 documents from the `bios` collection using the `pretty()` method.

[**Exercise 6**](./exercises/exercise06.mongodb): Return 2 documents from the `bios` collection skipping the first 5 documents.

Using [`mongoimport`](https://www.mongodb.com/docs/database-tools/mongoimport/#examples), import the [books.json](./books.json) file into your local MongoDB instance and use the books collection to build the following queries:

🚀 [**Exercise 7**](./exercises/exercise07.mongodb): Return the number of documents from the collection `books`.

🚀 [**Exercise 8**](./exercises/exercise08.mongodb): Count how many books there are with the `status` = `"PUBLISH"`.

🚀 [**Exercise 9**](./exercises/exercise09.mongodb): Display the `title`, `isbn` and `pageCount` attributes of the first 3 books. **DO NOT** return the `_id` attribute.

[**Exercise 10**](./exercises/exercise10.mongodb)0: Skip 5 documents and display the `_id`, `title`, `authors` and `status` attributes of books with `status` = `"MEAP"`, limiting yourself to 10 documents.
