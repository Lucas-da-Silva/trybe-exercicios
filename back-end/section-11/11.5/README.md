# Complex Updates - Array

## [Exercises - now the practice](./exercises/exercise01.mongodb)

For the exercises you will use a small dataset with some movies. To do so, connect to your instance and use the code snippet below to create the database and insert the documents:

<details>
<summary>MongoDB database</summary>

```json
use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);
```

</details>

🚀 [**Exercise 1**](./exercises/exercise01.mongodb): Add the `"superhero"` category to the `Batman` movie.

[**Exercise 2**](./exercises/exercise02.mongodb): Using the `$each` modifier, add the `"villain"` and `"comic-based"` categories to the `Batman` movie.

🚀 [**Exercise 3**](./exercises/exercise03.mongodb): Remove the `"action"` category from the `Batman` movie.

🚀 [**Exercise 4**](./exercises/exercise04.mongodb): Remove the first element from the `Batman` movie `category` array.

🚀 [**Exercise 5**](./exercises/exercise05.mongodb): Remove the last element from the `Batman` movie `category` array.

🚀 [**Exercise 6**](./exercises/exercise06.mongodb): Add the `"action"` element to the `Batman` movie `category` array, ensuring that this value is not duplicated.

[**Exercise 7**](./exercises/exercise07.mongodb): Add the category `"90's"` to the movies `Batman` and `Home Alone`.

[**Exercise 8**](./exercises/exercise08.mongodb): Create a document array called cast for the movie `Home Alone` with the following data:

```json
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

🚀 [**Exercise 9**](./exercises/exercise09.mongodb): Add the `character` field with the `Marv` value to the `cast` array where the `actor` field is equal to `Daniel Stern` in the movie `Home Alone`.

🚀 [**Exercise 10**](./exercises/exercise10.mongodb): Create an array of documents called `cast` for the Batman movie with the following data:

```
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Joker"
}
```

[**Exercise 11**](./exercises/exercise11.mongodb): Produce three *queries* for the Batman movie:

- Add the `actor` field, which must be an *array* with the value `Christian Bale`, to the `cast` *array* where the `character` field equals `Batman`;
- Add the `actor` field, which must be an *array* with the value `Michael Caine`, to the `cast` *array* where the `character` field equals `Alfred`;
- Add the `actor` field, which should be an *array* with the value `Heath Ledger`, to the `cast` *array* where the `character` field equals `Joker`.

🚀 [**Exercise 12**](./exercises/exercise12.mongodb): Add the values `"Michael Keaton"`, `"Val Kilmer"` and `"George Clooney`" to the `cast` actors of the `Batman` `character` from the movie `Batman`, and leave the *array* in alphabetical order.