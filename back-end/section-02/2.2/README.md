# Finding data in a database

> Just below the question I would put a query that I used to solve the exercise.

## Preparing Setup for Exercises

<details>
  <summary>mySQL Workbench</summary>

1. Open mySQL Workbench and connect to the database.
2. Create a new query tab.
3. Copy the database into the query tab.
4. Execute the query.

</details>

## Exercises - now the practice

### Exercise 1: Do tasks 1 to 15.

> To perform exercises 1 to 15, restore the following database:

<details>
<summary>Database</summary>

```
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;
CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);
CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);
CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);
INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');
 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);
 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

</details>

> This database is free to use and licensed under the terms of this [link](https://creativecommons.org/licenses/by-sa/3.0/).

- Write a query to display the string “This is SQL Exercise, Practice and Solution”.

```
SELECT 'This is SQL Exercise, Practice and Solution' AS string;
```

---

- Write a query to display three numbers in three columns.

```
SELECT 1 AS Number1, 2 AS Number2, 3 AS Number3;
```

---

- Write a query to display the sum of numbers 10 and 15.

```
SELECT 10 + 15 AS Sum;
```

---

- Write a query to display the result of any arithmetic expression.

```
SELECT 20/10 AS Division;
```

---

- Write a query to display all information from all scientists.

```
SELECT * FROM Scientists.Scientists;
```

---

- Write a query to display the name as “Project Name” and the hours as "Work Time” for each project.

```
SELECT Name AS 'Project Name', Hours AS 'Work Time' FROM Scientists.Projects;
```

---

- Write a query to display the name of the scientists in alphabetical order.

```
SELECT Name FROM Scientists.Scientists ORDER BY NAME ASC;
```

---

- Write a query to display the name of the projects in descending alphabetical order.

```
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
```

---

- Write a query that displays the string “Project <code>Name</code> took <code>Hours</code> hours to complete.” for each project.

```
SELECT CONCAT('Project ', Name,' took ', Hours, ' hours to complete.') 
AS 'Hours to Complete Project' FROM Scientists.Projects;
```

---

- Write a query to display the name and hours of the three projects with the most hours.

```
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
```

---

- Write a query to display the code of all projects in the <code>AssignedTo</code> table without repetition.

```
SELECT DISTINCT Code FROM Scientists.Projects;
```

---

- Write a query to display the name of the project with the highest number of hours.

```
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
```

---

- Write a query to display the name of the second project with the least amount of hours.

```
SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;
```

---

- Write a query to display all information from the five projects with the least amount of hours.

```
SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;
```

---

- Write a query that displays the string “There are <code>Number</code> scientists in the Scientists table.”, where <code>Number</code> refers to the number of scientists.

---