# Manipulating tables

> Just below the quetoes I put the command I used to get the result.

To run the delete commands, it is necessary to disable the <code>--safe-updates</code> mode. Run the following command in a query window within MySQL Workbench:

```
SET SQL_SAFE_UPDATES = 0;
```

## Execises - now the practice

The proposed exercises have varying levels of difficulty. Try to do as much as you can.

> To perform exercises 1 through 7, restore the <code>Pixar</code> database below.

<details>
<summary>Database Pixar</summary>

```
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;
CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);
CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);
INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
```

</details>

<strong>Exercise 1</strong>: Enter Pixar productions in the Movies table:

- Monstros SA, de Pete Docter, released in 2001, running at 92 minutes.
- Procurando Nemo, de John Lasseter, released in 2003, running at 107 minutes.
- Os Incríveis, de Brad Bird, released in 2004, running at 116 minutes.
- WALL-E, de Pete Docter, released in 2008, running at 104 minutes.

<details>
<summary>Command used</summary>

```
INSERT INTO Pixar.Movies(title, director, year, length_minutes)
VALUES 
    ('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'Jogn Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);
```

</details>

---

<strong>Exercise 2:</strong> The movie Procurando Nemo was rated 6.8, made 450 million domestically and 370 million internationally. Enter the information into the <code>BoxOffice</code> table.

<details>
<summary>Command used</summary>

```
INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES 
    (9, 6.8, 450000000, 370000000);
```

</details>

---

<strong>Exercise 3:</strong> The name of the director of the movie “Procurando Nemo” is incorrect, he was directed by Andrew Staton. Correct this data using the <code>UPDATE</code> command.

<details>
<summary>Command used</summary>

```
UPDATE Pixar.Movies 
SET 
    director = 'Andrew Staton'
WHERE
    title = 'Procurando Nemo';
```

</details>

---

<strong>Exercise 4:</strong> The movie title “Ratatouille” is incorrect in the <code>Movies</code> table. Also, the movie was released in 2007 and not in 2010. Please correct this data using the <code>UPDATE</code> command.

<details>
<summary>Command used</summary>

```
UPDATE Pixar.Movies 
SET 
    title = 'Ratatouille',
    year = 2007
WHERE
    title = 'ratatui';
```

</details>

---

<strong>Exercise 5:</strong> Insert the new classifications below in the <code>BoxOffice</code> table, remember that the <code>movie_id</code> column is a foreign key referring to the <code>id</code> column of the <code>Movies</code> table:

- Monsters SA, ranked 8.5, profited 300 million domestically and 250 million in international market.
- Os Incríveis, ranked 7.4, profited 460 million domestically and 510 million in international market.
- WALL-E, ranked 9.9, profited 290 million domestically and 280 in international market.

<details>
<summary>Command used</summary>

```
INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES 
    (8, 8.5, 300000000, 250000000),
	  (10, 7.4, 460000000, 510000000),
	  (11, 9.9, 290000000, 280000000);
```

</details>

---

<strong>Exercise 6:</strong> Delete the movie “WALL-E” from the <code>Movies</code> table.

<details>
<summary>Command used</summary>

```
-- delete WALL-E movie call.
DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id = (SELECT 
        id
    FROM
        Pixar.Movies
    
    WHERE
        title = 'WALL-E');

-- delete the movie “WALL-E” from the Movies table.
DELETE FROM Pixar.Movies 
WHERE
    title = 'WALL-E';
```

</details>

---

<strong>Exercise 7:</strong> Delete all <code>Movies</code> directed by “Andrew Staton” from the Movies table.

<details>
<summary>Command used</summary>

```
-- delete calls from movies created by "Andrew Stanton".
DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id IN (SELECT 
        id
    FROM
        Pixar.Movies
    
    WHERE
        director = 'Andrew Staton');

-- delete all Movies directed by “Andrew Staton” from the Movies table.
DELETE FROM Pixar.Movies 
WHERE
    director = 'Andrew Staton';
```

</details>

---

## Exercise - bonus

> To perform exercises 8 to 10, do the previous exercises (1 to 7) and use the <code>Pixar</code> database.

<strong>Exercise 8:</strong> Change the <code>BoxOffice</code> table rating to 9.0 of all movies that grossed over 400 million domestically.

<details>
<summary>Command used</summary>

```
UPDATE Pixar.BoxOffice 
SET 
    rating = 9.0
WHERE
    domestic_sales > 400000000
```

</details>

---

<strong>Exercise 9:</strong> Change the <code>BoxOffice</code> table rating to 6.0 of all movies that grossed less than 300 million in the international market and more than 200 million in the domestic market.

<details>
<summary>Command used</summary>

```
UPDATE Pixar.BoxOffice 
SET 
    rating = 6.0
WHERE
    international_sales < 300000000
        AND domestic_sales > 200000000;
```

</details>

---

<strong>Exercise 10:</strong> Delete all movies less than 100 minutes in length from the <code>Movies</code> table.

<details>
<summary>Command used</summary>

```
-- delete calls from movies less than 100 minutes in length.
DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id IN (SELECT 
        id
    FROM
        Pixar.Movies
    
    WHERE
        length_minutes < 100);

--  delete all movies less than 100 minutes in length from the Movies table.
DELETE FROM Pixar.Movies 
WHERE
    length_minutes < 100;
```

</details>

---