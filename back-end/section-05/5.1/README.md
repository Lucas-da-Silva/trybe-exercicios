# Software Architecture: Model Layer

> During the class, the concepts of layer-based software architecture were applied to organize the [trybecar api](./msc-architecture-trybecar/).

## Exercises - now the practice

Now the `Trybecar` company has trusted you to create some components and tests just for the `Model` layer.

They need you to provide the following functionality that performs access with the database:

🎯 List all registered drivers;

🎯 Register a new car;

🎯 Register a driver person;

🎯 Find a car through id;

🎯 Find a driver person through id;

🎯 Create N:N relationship between people drivers and cars.

---

### 🚀 Exercise 1

1. Create unit tests of the model layer responsible for listing all the drivers registered in the database.

    **You must verify that:**

- The function returns an array structure;

- Returns the list of driver people with the following format:

```
const expected = [
  {
    id: 1,
    name: 'Liana Cisneiros',
  }, 
  {
    id: 2,
    name: 'Fábio Frazão',
  },
];
```

Keeping an eye on tip 👀: Create the stub of the database connection.

2. Create the model layer responsible for listing all driver people.

---

### 🚀 Exercise 2
1. Create unit tests of the model layer responsible for registering a car in the database.

    **You must verify that:**

- Returns the car id registered with the following format:

```
const expected = 1;
```

2. Create the model layer responsible for registering a car.

---

### 🚀 Exercise 3
1. Create unit tests of the model layer responsible for finding a car by id.

    **You must verify that:**

- Returns the car requested by id with the following format:

```
const expected = {
  id: 2,
  model: 'Volkswagen Gol',
  color: 'Vermelho',
  licensePlate: 'DZG-4376',
};
```

2. Create the model layer responsible for finding a car by id.

---

### 🚀 Exercise 4
1. Create unit tests of the model layer responsible for finding a driver person through id.

    **You must verify that:**

- Returns the driver person requested by the `id` with the following format:

```
const expected = {
  id: 1,
  name: 'Liana Cisneiros',
};
```

2. Create the model layer responsible for finding a driver person by id.

--- 

### 🚀 Exercise 5
1. Create unit tests of the model layer responsible for registering a driver person.

    **You must verify that:**

- Returns the registered driver person with the following format:

```
const expected = 1;
```

2. Create the model layer responsible for registering a driver person.

---

### 🚀 Exercise 6
1. Create unit tests of the model layer responsible for creating the N:N relationship between people drivers and cars.

    **You must verify that:**

- Returns the relationship between driver and registered car with the following format: 

```
const expected = 1;
```
2. Create the model layer responsible for registering the drivers with the N:N relationship with the registered cars.
