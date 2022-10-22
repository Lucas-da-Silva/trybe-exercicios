# Uncomplicating JOINs

## Exercises - now the practice

Do exercises 1 to 6 using the <code>pixar</code> database below:

<details>
<summary><code>pixar</code> database</summary>

```
DROP SCHEMA IF EXISTS pixar;
CREATE SCHEMA pixar;
USE pixar;
CREATE TABLE theater (
    id INTEGER auto_increment PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL,
    location VARCHAR(30) NULL
);
CREATE TABLE movies (
    id INTEGER auto_increment PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    director VARCHAR(30) NULL,
    year INT NOT NULL,
    length_minutes INT NOT NULL,
    theater_id INTEGER,
    FOREIGN KEY (theater_id) REFERENCES theater (id)
);
CREATE TABLE box_office (
    movie_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movies (id),
    rating DECIMAL(2,1) NOT NULL,
    domestic_sales INT NOT NULL,
    international_sales INT NOT NULL
);
INSERT INTO theater(name, location)
    VALUES ('Cinemark', 'São Paulo'),
        ('Brodway theater', 'Nova York'),
        ('Phoenix theater', 'Londres'),
        ('Le Champo', 'Paris'),
        ('TLC Chinese Theater', 'Los Angeles'),
        ('Regal Tikahtnu', 'Alaska');
INSERT INTO movies(title, director, year, length_minutes, theater_id)
    VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
        ('Vida de inseto', 'Andrew Stanton', 1998, 95, 3),
        ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
        ('UP', 'Pete Docter', 2009, 101, 2),
        ('Carros', 'John Lasseter', 2006, 117, NULL),
        ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
        ('Valente', 'Brenda Chapman', 2012, 98, NULL),
        ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
        ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
        ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
        ('WALL-E', 'Pete Docter', 2008, 104, NULL);
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
    VALUES (1, 8.3, 190000000, 170000000),
      (2, 7.2, 160000000, 200600000),
      (3, 7.9, 245000000, 239000000),
      (4, 6.1, 330000000, 540000000),
      (5, 7.8, 140000000, 310000000),
      (6, 5.8, 540000000, 600000000),
      (7, 7.5, 250000000, 190000000),
      (8, 8.5, 300000000, 250000000),
      (10, 7.4, 460000000, 510000000),
      (9, 6.8, 450000000, 370000000),
      (11, 9.9, 290000000, 280000000);
```

</details>

### Just below the questions I put the code that I used to solve the problem.

<strong>Exercise 1:</strong> Using <strong>INNER JOIN</strong>, find <code>domestic sales</code> and <code>international sales</code> for each movie.

<details>
<summary>Command I used</summary>

```
SELECT 
    M.title, BO.domestic_sales, BO.international_sales
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS BO ON M.id = BO.movie_id;
```

</details>

---

🚀 <strong>Exercise 2:</strong> Using <code>INNER JOIN</code>, do a search that returns the number of sales for each movie that has a higher number of international sales (<code>international_sales</code>) than national sales (<code>domestic_sales</code>).

<details>
<summary>Command I used</summary>

```
SELECT 
    M.title, BO.domestic_sales, BO.international_sales
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS BO ON M.id = BO.movie_id
WHERE BO.international_sales > BO.domestic_sales;
```

</details>

---

🚀 <strong>Exercise 3:</strong> Using <code>INNER JOIN</code>, perform a search that returns the films and their <code>rating</code> in descending order.

<details>
<summary>Command I used</summary>

```SELECT 
    M.title, BO.rating
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS BO ON M.id = BO.movie_id
ORDER BY BO.rating DESC;

```

</details>

---

<strong>Exercise 4:</strong> Using the <code>LEFT JOIN</code>, perform a search that returns all the data from the theaters, even those that do not have movies in theaters and, additionally, the data of the movies that are showing in these theaters. Return the names of theaters in alphabetical order.

<details>
<summary>Command I used</summary>

```
SELECT 
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    pixar.theater AS T
        LEFT JOIN
    pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name;
```

</details>

---

<strong>Exercise 5:</strong> Using the <code>RIGHT JOIN</code>, perform a search that returns all the data of the movies, even those that are not showing and, additionally, the data of the theaters that have these movies in theaters. Return the names of theaters in alphabetical order.

<details>
<summary>Command I used</summary>

```
SELECT 
	  M.title,
    M.director,
    M.year,
    M.length_minutes,
    T.name,
    T.location
FROM
    pixar.theater AS T
        RIGHT JOIN
    pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name;
```

</details>

---

## Exercises - bonus

🚀 <strong>Exercício 6:</strong> Using the <code>INNER JOIN</code>, select all the information of the movies that are showing (they have <code>theater_id</code> different from <code>NULL</code>) with a rating greater than 8.

<details>
<summary>Command I used</summary>

```
SELECT 
    M.title, M.director, M.year, M.length_minutes, rating
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS BO ON M.id = BO.movie_id
WHERE
    theater_id IS NOT NULL AND rating > 8;
```

</details>

---