# Transforming ideas into a database model

> Just below the question I put the command I used to solve the exercise.

## Exercises - now the practice:

<strong>Exercise 1:</strong> 🚀 A zoo needs a database to store information about its animals. The information to be stored about each animal is:

- Name;

- Species;

- Sex;

- Age;

- Location.

Each animal also has <strong>multiple</strong> caregivers, and each caregiver can be responsible for more than one animal. In addition, each caregiver has <strong>a</strong> manager, and each manager may be responsible for more than one caregiver.

<details>
<summary>Command I used</summary>

```
DROP SCHEMA IF EXISTS zoo;
CREATE DATABASE zoo;
USE zoo;

CREATE TABLE `locations` (
    `location_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(20) NOT NULL
);

CREATE TABLE `animal` (
    `animal_id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(20) NOT NULL,
    `specie` VARCHAR(20) NOT NULL,
    `sex` VARCHAR(10) NOT NULL,
    `age` INT NOT NULL,
    `location` INT NOT NULL,
    FOREIGN KEY (`location`)
        REFERENCES `locations` (`location_id`)
);

CREATE TABLE `managers` (
    `manager_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(15) NOT NULL,
    `last_name` VARCHAR(15) NOT NULL
);

CREATE TABLE `caregivers` (
    `caregivers_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(15) NOT NULL,
    `last_name` VARCHAR(15) NOT NULL,
    `manager` INT NOT NULL,
    FOREIGN KEY (`manager`)
        REFERENCES `managers` (`manager_id`)
);

CREATE TABLE `animal_caregivers` (
    `animal_id` INT NOT NULL,
    `caregivers_id` INT NOT NULL,
    FOREIGN KEY (`animal_id`)
        REFERENCES `animal` (`animal_id`),
    FOREIGN KEY (`caregivers_id`)
        REFERENCES `caregivers` (`caregivers_id`)
);
```

</details>

---

> I also did normalization exercises, but they were done in spreadsheets, so they are not here.
