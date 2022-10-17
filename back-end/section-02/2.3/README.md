# Filtering data specifically

> Just below the questions, I put the command that I used.

## Exercises - now the practice

### 🚀 Exercise 1: to perform taks 1 throught 7, restore the following database:

<details>
<summary>Database</summary>

```
DROP SCHEMA IF EXISTS PecasFornecedores;
CREATE SCHEMA PecasFornecedores;
USE PecasFornecedores;

CREATE TABLE Pecas (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecedores (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecimentos (
  code INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  peca INTEGER,
  FOREIGN KEY (peca) REFERENCES Pecas (code),
  Fornecedor VARCHAR(40),
  FOREIGN KEY (fornecedor) REFERENCES Fornecedores (code),
  Preco INTEGER NOT NULL
);

CREATE TABLE Vendas (
  code INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fornecimento INTEGER,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (fornecimento) REFERENCES Fornecimentos (code)
);

INSERT INTO Fornecedores(code, name)
  VALUES ('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Peças'),
    ('INF', 'Infinity Peças LTDA');

INSERT INTO Pecas(code, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Parafuseta'),
    (3, 'Grampola'),
    (4, 'Grapeta');

INSERT INTO Fornecimentos(peca, fornecedor, preco)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);

INSERT INTO Vendas(fornecimento, quantity, order_date)
  VALUES (1, 3, '2017-05-22 11:28:36'),
    (2, 2, '2018-03-22 11:35:24'),
    (3, 8, '2018-11-16 15:51:36'),
    (3, 10, '2019-02-13 13:23:22'),
    (8, 5, '2019-06-11 12:22:48'),
    (6, 1, '2019-09-07 09:53:58'),
    (7, 3, '2020-01-05 08:39:33'),
    (9, 5, '2020-05-13 14:05:19');
```

</details>

1. Let's go! Make a query that returns all peças that start with the letters <code>GR</code>.

    ```
    SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'Gr%';
    ```

2. Now, write a query to return all fornecimentos in which the <code>peca</code> column has the value <code>2</code>. Organize the result in alphabetical order by fornecedor.

    ```
    SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;
    ```

3. Then make a query to display the peças, preço and fornecedor for all fornecimentos where the fornecedor code has the letter <code>N</code>.
    
    ```
    SELECT peca AS Peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
    WHERE Fornecedor LIKE '%N%';
    ```

4. Forward, not long! Write a query to display all information from fornecedores that are limited companies (LTDA). Sort these results in descending alphabetical order.

    ```
    SELECT * FROM PecasFornecedores.Fornecedores
    WHERE name LIKE '%LTDA%' ORDER BY name DESC;
    ```

5. Now, make a query to display the number of companies (fornecedores) that contain the letter <code>F</code> in the code.

    ```
    SELECT COUNT(*) AS 'Number of companies' FROM PecasFornecedores.Fornecedores
    WHERE code LIKE '%F%';
    ```

6. Almost there! Now write a query to display fornecimentos where peças cost more than <code>R$15.00</code> and less than <code>$40.00</code>. Sort the results in ascending order.

    ```
    SELECT * FROM PecasFornecedores.Fornecimentos
    WHERE Preco > 15 AND Preco < 40 ORDER BY Preco;
    ```

7. Ufa! Finally, make a query to display the number of vendas made between <code>04/15/2018</code> and <code>07/30/2019</code>.

    ```
    SELECT COUNT(*) AS 'Sales Number' FROM PecasFornecedores.Vendas
    WHERE order_date BETWEEN '2018/04/15' AND '2019/07/30';
    ```

---

## Exercise - Bonus

### Exercise 2: Using the Scientists database, perform the following exercises:

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

INSERT INTO Scientists(SSN, Name)
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

1. Write a query to display all information for all scientists that have the letter <code>e</code> in their name.

    ```
    SELECT * FROM Scientists.Scientists WHERE Name Like '%e%';
    ```

2. Write a query to display the name of all projects whose code starts with the letter <code>A</code>. Sort the result in alphabetical order.

    ```
    SELECT Name FROM Scientists.Projects WHERE Code LIKE 'A%' ORDER BY Name;
    ```

3. Write a query to display the code and name of all projects that have the number 3 in their code. Sort the result in alphabetical order.

    ```
    SELECT Code, Name FROM Scientists.Projects
    WHERE Code LIKE '%3%' ORDER BY Name;    
    ```

4. Write a query to display all scientists (numeric values) whose projects are <code>AeH3</code>, <code>Ast3</code> or <code>Che1</code>.

    ```
    SELECT Scientist FROM Scientists.AssignedTo
    WHERE Project IN ('AeH3', 'Ast3', 'Che1');
    ``` 

5. Write a query to display all information for all projects older than 500 hours.
    
    ```
    SELECT * FROM Scientists.Projects WHERE Hours > 500;
    ```

6. Write a query to display all information for all projects whose hours are greater than 250 and less than 800.

    ``` 
    SELECT * FROM Scientists.Projects WHERE Hours > 250 AND Hours < 800;
    ```

7. Write a query to display the name and code of all projects whose name does <strong>NOT</stong> start with the letter <code>A</code>.
    
    ```
    SELECT Name, Code FROM Scientists.Project WHERE Name NOT LIKE 'A%';
    ```

8. Write a query to display the name of all projects whose code contains the letter <code>H</code>.

    ```
    SELECT Name FROM Scientists.Projects WHERE Code LIKE '%H%';
    ```

---