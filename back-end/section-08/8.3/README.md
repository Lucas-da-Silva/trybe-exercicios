# Express with TypeScript

> The contents of the [express-typescript](./express-typescript/src/) directory were developed during the class.

## [Exercises - now the practice](./now-practice/src/)

Do the exercises using the database below:

```SQL
CREATE DATABASE IF NOT EXISTS `TypeScriptExpress`;
USE `TypeScriptExpress`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `_id_` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`_id_`)
);

DROP TABLE IF EXISTS `_Posts_`;
CREATE TABLE `_Posts_` (
  `_id_` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `author` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `publicationDate` date NOT NULL,
  PRIMARY KEY (`_id_`)
);

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products`(
  `_id_` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(250) NOT NULL,
  `brand` varchar(250) NOT NULL,
  `price` integer NOT NULL,
  `manufacturing_date` date NOT NULL,
  `expiration_date` date NOT NULL
);

DROP TABLE IF EXISTS `Restaurants`;
CREATE TABLE `Restaurants` (
  `_id_` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `category` varchar(45) NOT NULL,
  `openingTime` time NOT NULL,
  `closingTime` time NOT NULL,
  PRIMARY KEY (`_id_`)
);

INSERT INTO `Users`
VALUES
  (1, 'Geraldo', 'geraldo@email.com', '123456'),
  (2, 'Marceline', 'marceline@email.com', '123456');

INSERT INTO `_Posts_`
VALUES
  (1, 'Facebook vai div_id_ir departamento de real_id_ade aumentada e virtual', 'Renan', 'tecnologia', '2021-10-26'),
  (2, 'O que é UDP e quais as diferenças com o TCP?', 'Giulianna', 'tecnologia', '2021-10-26');

INSERT INTO `Products`
VALUES
  (1, 'macbook pro 16', 'apple', 3600, '2021-10-25', '2026-10-25'),
  (2, 'surface pro', 'microsoft', 2500, '2021-10-25', '2024-10-25'),
  (3, 'alienware', 'dell', 2000, '2021-10-25', '2022-10-25'),
  (4, 'alienware expired', 'dell', 2000, '2015-10-25', '2016-10-25');

INSERT INTO `Restaurants`
VALUES
  (1, 'Los Pollos Hermanos', 'Fast Food', '10:00:00', '23:00:00'),
  (2, 'Central Perk', 'Coffee House', '07:00:00', '13:30:00');

```

### Activity 1 🚀
**
**Goals:****

- Create a complete **CRUD** of people using an application.
- Allow people using this application to log in using their credentials.
- _Use the **Users** table to perform the activity_.

**
**Routes:****

- A route that lists all people using the application;
- A route that lists a single user by its _id_;
- A route that allows registering a new user of the application;
- A route that allows editing the record of a single user registered through its _id_;
- A route that allows deleting a user of the application based on its _id_.

**
**Rules:****

- A person using the application must have the properties _id_, name, _email_ and _password_;
- No property of a person using the application can be null or empty;
- The _id_ should be automatically generated;
- The password must have a minimum of 6 and a maximum of 12 characters;
- The name must be at least 3 characters long;
- The _email_ must have a val_id_ _email_ format (email@email.com);
- When creating a new user, the _email_ must not already be registered.

**Bonus:**

- Try using jwt so that a user can only delete or update their own account.

---

### Activity 2 🚀

**Goals:**

- Create a complete **CRUD** of _Blog Posts_.
- List _posts_ by author, category or creation date.
- _Use the Posts table to carry out the activity_.

**Routes:**

- A route that lists all posts;
- A route that lists a single post by its _id_;
- A route that allows you to register a new post;
- A route that allows editing the record of a registered post based on its _id_;
- A route that allows deleting a post based on its _id_.
- A route that receives via `query params` the **author, category or creation date** and lists all _posts_ that fit the filter;

**Rules:**

- A post must have _id_, title, author name, category name and creation date properties;
- **No property** of a _post_ can be null or empty;
- The author's name must have at least 3 characters;
- The category name must be at least 3 characters long;
- The creation date `query param` must be in the format: yyyy-mm-dd;

---

### Activity 3

**Goals:**

- Create a complete **CRUD** of products.
- List products by price range.
- List the products that are not yet expired.
- _Use the **Products** table to perform the activity_.

**Routes:**

- A route that lists all products;
- A route that lists a single product by its _id_;
- A route that allows you to register a new product;
- A route that allows editing the registration of a registered product;
- A route that allows deleting a product based on its _id_.
- A route that receives an initial and final price via `query params` and lists all products that fit the filter;
- A route that only lists products that are not yet expired;

**Rules:**

- A product must have the properties _id_, name, brand name, price, date of manufacture and expiration date;
- **No property** of a product can be null or vo_id_;
- The brand name must be at least 3 characters long;
- Price cannot be given a negative value;
- The manufacturing date cannot be the same as the expiration date;
- The starting and ending price value `query params` cannot receive negative values;

---

### Activity 4

**Goals:**

- Create a complete **CRUD** of restaurants.
- List restaurants that are open.
- _Use the **Restaurants** table to carry out the activity_.

**Routes:**

- A route that lists all restaurants;
- A route that lists a single restaurant by its _id_;
- A route that allows you to register a new restaurant;
- A route that allows you to edit the registration of a registered restaurant;
- A route that allows you to delete a restaurant based on its _id_.
- A route that lists only restaurants that are open at the time of the call;

**Rules:**

- A restaurant must have the properties _id_, name, type of food served, opening time and closing time;
- **No property** of a restaurant may be null or vo_id_;
- The name must be at least 3 characters long;
- The type of food must have at least 3 characters;