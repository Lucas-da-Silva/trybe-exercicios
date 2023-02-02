# Query operators

## [Exercises - now the practice](./exercises/)

To carry out today's exercises, you will use a movie dataset. To do so, create the `movies` collection:

<details>
<summary>MongoDB code</summary>

```mongodb
use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure"
    ],
    imdbRating: 7.7,
    budget: 35,
    grossWorldwide: 411,
    ratings: [ 85, 100, 102, 105 ],
    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi"
    ],
    imdbRating: 6.6,
    budget: 160,
    grossWorldwide: 524,
    ratings: [ 78, 52, 95, 102 ],
    description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy"
    ],
    imdbRating: 7.4,
    budget: 0,
    grossWorldwide: 476,
    ratings: [ 200, 99, 65 ],
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  },
  {
    title: "Matrix",
    category: [
      "sci-fi",
      "action"
    ],
    imdbRating: 8.7,
    budget: 63,
    grossWorldwide: 467,
    ratings: [ 77, 92, 150, 180 ],
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
  },
  {
    title: "Pulp Fiction",
    category: [
      "crime",
      "drama"
    ],
    imdbRating: 8.9,
    budget: 8,
    grossWorldwide: 213,
    ratings: [ 110, 84, 95, 90 ],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
   {
     title: "Stealth",
     category: [
       "action",
       "adventure",
       "sci-fi"
     ],
     imdbRating: 5.1,
     budget: 135,
     grossWorldwide: 79,
     ratings: [ 50, 48, 39, 67 ],
     description: "Deeply ensconced in a top-secret military program, three pilots struggle to bring an artificial intelligence program under control before it initiates the next world war."
   }
]);
```

</details>

[**Exercise 1:**](./exercises/exercise01.mongodb) Using the `$all` operator, return all movies that contain both `action` and `adventure` in the `category` array.

[**Exercise 2:**](./exercises/exercise02.mongodb) 🚀 Now return movies that contain `action` and `sci-fi` in the `category` *array* and have an **IMDB** score greater than `7`.

[**Exercise 3:**](./exercises/exercise03.mongodb) Return all movies with `ratings` greater than `103`, displaying only the `title` and `ratings` fields.

[**Exercise 4:**](./exercises/exercise04.mongodb) 🚀 Return all movies with `ratings` between `100` and `105`, displaying only the `title` and `ratings` fields.

[**Exercise 5:**](./exercises/exercise05.mongodb) 🚀 Return all movies where at least one element of `ratings` is between `64` and `105` and is divisible by `9`, display only `title` and `ratings` fields.

[**Exercise 6:**](./exercises/exercise06.mongodb) Return movies in the `adventure` category and with `ratings` greater than `103`, displaying only the `title`, `ratings` and `category` fields.

[**Exercise 7:**](./exercises/exercise07.mongodb) Return only the `title` of all movies with two elements in the `category` *array*.

[**Exercise 8:**](./exercises/exercise08.mongodb) 🚀 Return only the `title` of all movies with four elements in the `ratings` *array*.

[**Exercise 9:**](./exercises/exercise09.mongodb) Look for movies where the modulus 5 of the `budget` field is 0 and the `category` array has size `2`.

[**Exercise 10:**](./exercises/exercise10.mongodb) 🚀 Return movies from the `"sci-fi"` category or that have `ratings` greater than `199`, displaying only the `title`, `ratings` and `category` fields.

[**Exercise 11:**](./exercises/exercise11.mongodb) Return movies whose `rating` is size 4 and which are in the `"adventure"` or `"family"` category, but which do not have an `imdbRating` less than 7.

[**Exercise 12:**](./exercises/exercise12.mongodb) 🚀 Using the `$regex` operator, return all movies where the description starts with the word `"The"`.

[**Exercise 13:**](./exercises/exercise13.mongodb) Using the `$regex` operator, return all movies where the description ends with the word `"humanity."`.

[**Exercise 14:**](./exercises/exercise14.mongodb) Using the `$expr` operator, return all movies where the `budget` is less than `grossWorldwide`.
