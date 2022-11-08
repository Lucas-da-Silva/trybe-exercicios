## Exercises - now the practice

Now it's time to create some Service layer functions that will use the Model layer functions we made earlier.

In these new functions we are going to validate if the data we receive from the Controller layer is in accordance with the business rules.

And to make these contracts very clear and ensure the layer works, let's use TDD! 💪

**General steps for creating the service layer using TDD**

1 - Determine how our role in the Service layer will work (contract):

   - What data is received by the controller?
   - What validations need to be done?
   - What model functions do we use?
   - What result will be returned to the controller in each case?

2 - Create tests based on the contracts
   - Test paths that generate validation errors
   - Test path returning successfully

3 - Implement code in the Service layer
   - Write functions
   - Check if they pass the tests

4 - Isolate tests using stubs
   - Create stubs for external resources (Model layer, for example)
   - Tests should work without available resources (DB for example)

### Exercise 1 - List the drivers (service)
Create a function in the Service layer that lists the drivers in our app.

> About the function

The function must:

- If you call `getDrivers`;
- Use the Model layer to receive the list of drivers;
- Return an object in the same pattern as the other functions of our Service layer.

> Example of successful response

```
{
  type: null,
  message: [
    { id: 1, name: 'Liana Cisneiros' },
    { id: 2, name: 'Fábio Frazão' },
    { id: 3, name: 'Anastacia Bicalho' },
    { id: 4, name: 'Samara Granjeiro' },
    { id: 5, name: 'Levi Teixeira' },
  ],
}
```

#### Part 1.1: Create unit tests for the `getDrivers` function
> Test Scenarios

- Listing people drivers
   - the list of drivers is an array
   - returns the list of drivers successfully

#### Part 1.2: Implement the `getDrivers` function in the Service layer
- Call the Model layer functions as needed
- Confirm that the function passes the tests

#### Part 1.3: Create stubs to isolate tests
- Use Model layer function stubs to isolate your tests
- Confirm that even without a database running the tests work correctly

--- 

### Exercise 2 - Register a car (service)
Create a function in the Service layer that registers a car in our app.

The function must:

- If you call `createCar`;
- Receive the model, color and license plate of the new car;
- Return an error object if any data is not received or is invalid;
- Use the Model layer to register a new car in the database;
- Return an object in the same pattern as the other functions of our Service layer;

> Parameters to be received

- `model`: string with at least 3 characters ex.: `"Ford Ka"`
- `color`: string with at least 2 characters ex.: `"Blue"`
- `licensePlate`: string with exactly 7 characters ex.: `"ABC1D2E"`

> Example of successful response

```
{
  type: null,
  message: {
    id: 1,
    model: 'Chevrolet Monza',
    color: 'Branco',
    licensePlate: 'ABC1A2B',
  },
}
```

> Error response example

```
{
  type: 'INVALID_VALUE',
  message: '"model" length must be at least 3 characters long',
}
```

#### Part 2.1: Create unit tests for the `createCar` function

> Test scenarios

- Trying to register a new car with semantic errors
  - returns an error when receiving an invalid model
  - returns an error when receiving an invalid color
  - returns an error when receiving an invalid card

- Successfully registering a new car
  - does not return errors
  - return the registered car

#### Part 2.2: Implement the `createCar` function in the Service layer
  - Create a Joi schema and a validation function to validate the data of a new car
  - Call the Model layer functions as needed
  - Confirm that the function passes the tests

#### Part 2.3: Create stubs to isolate tests
  - Use Model layer function stubs to isolate your tests
  - Confirm that even without a database running the tests work correctly

---

### 🚀 Exercise 3 - Register a driver person (service)
Create a function in the Service layer that registers a driver person in our app.

The function must:

- If you call `createDriver`;
- Receive the name of the driver;
- Optionally receive an array of car ids already registered in our database;
- Return an error object if the name is not received or is invalid;
- Return an error object if the cars array is invalid eg some car does not exist;
- Use the Model layer to register the driver in the database;
- Link the cars from the ids array (if passed) to the driver person;
- Return an object in the same pattern as the other functions of our Service layer,
- The list of cars linked to the driver person must be returned along with the driver person's other information.

> Parameters to be received

- `name`: string with at least 3 characters ex.: `"Gena"`
- `carIds`: array with the ids of the cars to be linked with the person driver (optional)

> Example of successful response

```
{
  type: null,
  message: {
    id: 1,
    name: 'Gus',
    cars: [
      {
        color: 'Branco',
        id: 1,
        licensePlate: 'NCA-0956',
        model: 'Renault Sandero',
      },
      {
        color: 'Vermelho',
        id: 2,
        licensePlate: 'DZG-4376',
        model: 'Volkswagen Gol',
      },
    ],
  }
}
```

> Error response example

```
{
  type: 'CAR_NOT_FOUND',
  message: 'Some car is not found',
}
```

#### 🚀 Part 3.1: Create unit tests for the createDriver function

> Test scenarios

- Trying to register a new driver person with semantic errors
  - returns an error when receiving an invalid name
  - returns an error when receiving an invalid car list
- Trying to register a new driver person with id errors
  - returns the error “CAR_NOT_FOUND”
  - returns the message “Some car is not found”
- Registering a new person successfully driver without cars
  - returns the registered driver person
  - does not return error
- Registering a new driver person successfully with cars
  - returns the cars linked to the driver person
  - does not return error

#### 🚀 Part 3.2: Implement the `createDriver` function in the Service layer
- Confirm that the function passes the tests

#### 🚀 Part 3.3: Create stubs to isolate tests
- Use Model layer function stubs to isolate your tests
- Confirm that even without a database running the tests work correctly