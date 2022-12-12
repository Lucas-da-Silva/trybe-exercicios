# Static Typing and Generics

> The contents of the [model-with-mysql](./model-with-mysql/) and [model-with-sequelize](./model-with-sequelize/) folders were developed during the class.

## Exercises - now the practice

### [Exercise 1](./now-the-practice/src/Car/)

Create a `Car` class whose object will represent a car.

_Properties:_

- It must contain a `string` property called `brand` that represents the brand.
- It must contain a property of type `string` called `color` that represents the color.
- It must contain a property of type `number` called `doors` that represents the number of doors.

_Behaviors:_

- It should contain a method called `honk` that sounds the car's horn.
- It must have a method called `turnOn` that turns on the car.
- It must have a method called `turnOff` that turns off the car.
- It must have a method called `speedUp` that speeds up the car.
- It must have a method called `speedDown` that reduces the speed of the car.
- It must have a method called `stop` that stops the car.
- It must have a method called `turn` that receives a string-type direction and turns the car.

---

### [Exercise 2](./now-the-practice/src/Car/)

We are now going to use the `Car` class that we created in the previous exercise. An app driver person will make a trip to pick up your new passenger person. She then gets into her 4-door silver volkswagen, starts her car and begins the journey:

- Go straight on;
- In 600 meters turn left;
- Turn left;
- In 200 meters at the roundabout, take the second exit on the right;
- Keep straight for the next 1.2 kilometers;
- In 300 meters turn right;
- Turn right;
- In 400 meters you will reach your destination;
- You have arrived at your destination.

Ready. The driver stops, the passenger enters through the back door on the passenger side and the journey continues.

- Go straight on;
- In 300 meters turn right;
- Turn right;
- Keep straight for the next 2 kilometers;
- In 200 meters turn left;
- Turn left;
- In 400 meters turn right;
- Turn right;
- In 100 meters you will reach the destination.
- You have arrived at the destination.

The passenger gets off the vehicle and the driver goes on to the next race.

Now you must develop a script capable of automating the entire described scenario.

---

### [Exercise 3](./now-the-practice/src/Pizza/)

Create an interface that represents a pizza. It must contain:

- A string property called `flavor` that represents the flavor.
- A property called `slices` whose type is the union between the possible numbers of pizza slices.
  - The number of slices can be 4, 6 or 8;
  - Use a `type alias` to store the type of this property.

**a)** Create an 8-slice pepperoni-flavored pizza;

**b)** Create a 6-slice Margherita-flavored pizza;

**c)** Create a 4-slice Nutela-flavored pizza.

---

### [Exercise 4](./now-the-practice/src/Pizza/)

We are now going to extend our Pizza interface with new types of pizza. Are they:

- Common Pizza - its flavors are “Calabresa”, “Chicken” and “Pepperoni”, they can have 4, 6 or 8 pieces.
- Vegetarian Pizza - its flavors are “Marguerita”, “Palmito” and “Cogumelo”, they can have 4, 6 or 8 pieces.
- Sweet Pizza - its flavors are “Nutela”, “Guava with Cheese” and “Marshmallow”, they can have only 4 pieces.

You must use `type aliases` and `type unions` to create the possible flavors for each type of pizza.

Now create:

- 3 common type pizzas;
- 2 vegetarian type pizzas;
- 1 pizza of the sweet type.

---

### [Exercise 5](./now-the-practice/src/myFilter.ts)

In **JavaScript**, we have the _High Order Function_ **filter**. It works as follows:

- It receives as first parameter an _array_ that can be of any type;
- It receives as second parameter a _callback_ function;
- Returns a new _array_ removing items that do not meet the _callback_ function's condition;
- The _callback_ function receives an item of the _array_ type as its first parameter;
- The _callback_ function can receive an integer _index_ as a second parameter;
- The _callback_ function can receive the _array_ itself as a third parameter;
- The _callback_ function returns a boolean.

Using **generics** and the other concepts learned in TypeScript, recreate the **filter** function and name it **myFilter**.

---

## Exercises - Sequelize with Typescript

### 🚀 [Exercise 1](./sequelize-with-typescript/src/database/migrations/20221212112702-create-authors.js)

Create a migration called `create-authors` to create an `authors` table with the following columns:

| Column Name | Description                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------- |
| id          | must be of type integer, cannot be null, and must be the primary key of the autoincrementing table |
| name        | must be of type string and cannot be null                                                          |

> Note: the `down` method of the migration must be able to remove the table. Note 2: Run the `npm run db:reset` command and verify that the table was created before continuing to the next exercises.

---

### 🚀 [Exercise 2](./sequelize-with-typescript/src/database/migrations/20221212123420-create-genres.js)

Create a migration called `create-genres` to create a `genres` table with the following columns:

| Column Name | Description                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------- |
| id          | must be of type integer, cannot be null, and must be the primary key of the autoincrementing table |
| genre       | must be of type string and cannot be null                                                          |

> Note: the `down` method of the migration must be able to remove the table. Note 2: Run the `npm run db:reset` command and verify that the table was created before continuing to the next exercises.

> 👀 Keeping an eye on the tip: After finishing the first three exercises, creating seeds for the tables can make it easier to solve the next exercises.

### 🚀 [Exercise 3](./sequelize-with-typescript/src/database/migrations/20221212123622-create-books.js)

Create a migration to create a `books` table with the following columns:

| Column Name | Description                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | must be of type integer, cannot be null, and must be the primary key of the autoincrementing table                                                   |
| title       | must be of type string and cannot be null                                                                                                            |
| author_id   | must be of type integer, cannot be null and must be a foreign key of the table (its relationship is done with the `id` field of the `authors` table) |
| genre_id    | must be of type integer, cannot be null and must be a foreign key of the table (its relationship is done with the `id` field of the `genres` table)  |

> Note: the `down` method of the migration must be able to remove the table. Note 2: Run the `npm run db:reset` command and verify that the table was created before continuing to the next exercises.

---

### [Exercise 4](./sequelize-with-typescript/src/database/models/AuthorModel.ts)

Create the `Author` model with the necessary `authors` table settings.

---

### [Exercise 5](./sequelize-with-typescript/src/database/models/BookModel.ts)

Create the `Book` model with the necessary settings from the `books` table.

> Keep an eye on the tip 👀: create the relationship between the `books` and `authors` tables.

---

### [Exercise 6](./sequelize-with-typescript/src/index.ts)

Create a `src/index.ts` file that returns an array of objects with the following keys:

- `author`: must have the value corresponding to the author's name;
- `totalBooks`: must have the value corresponding to the total number of books by that author.

> The order of objects must be descending based on the value of `totalBooks`; The authors' names must not be repeated in the objects.

Output example:

```JSON
[
  {
    author: author_name1,
    totalBooks: author's_number_of_books1,
  },
  {
    author: author_name2,
    totalBooks: author's_number_of_books2,
  },
    ...
]
```

> Keep an eye on the tip 👀: To solve this exercise, it is interesting to search the sequelize documentation on how to specify attributes using `sequelize.fn` to perform aggregation.
