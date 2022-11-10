# Software Architecture: Controller Layer

## Exercises - now the practice

🚀 Throughout this block, you developed an UBER app! Today you discovered a new architecture layer: the Controllers layer! Now you will develop the controllers and tests of your application in a way that it is even more structured.

### 🚀 Exercise 1
- To perform exercise 1, you will need to create the following files:
  - The `tests/unit/controllers/mocks/driver-exercises.controller.mock.js file`;
  - The `tests/unit/controllers/driver-exercises.controller.test.js file`;
  - The `src/controllers/index.js file`;
  - The `src/controllers/driver.controller.js file`;
  - The `src/routers/driver.router.js file`;
  - The `src/routers/index.js file`;

1. Develop **tests** for the `driverController.getDrivers()` function, which is responsible for fetching all registered drivers. The `driverController.getDrivers()` function must use the controller layer.

> 👀 Keeping an eye on the tip 👀: The paths and files mentioned above will be reused in the next exercises, but in this first exercise it will be necessary to create them.

> Note: Don't worry about seeing the tests fail. We'll create the function in such a way that it passes them through.

2. Develop the `getDrivers` function so that it passes our tests.

3. Create the GET `/drivers` route

---

### 🚀 Exercise 2
It's finally time to structure a POST route! And for that we are going to use the `driverController.createDriver()` function, responsible for registering a new driver. For that:

- To perform exercise 2, you will need to create the following file:
  - `src/utils/errorMap.js` with the following content:

```
const errorMap = {
  TRAVEL_NOT_FOUND: 404,
  DRIVER_NOT_FOUND: 404,
  CAR_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  TRAVEL_CONFLICT: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
```

1. Develop **tests** for the `driverController.createDriver()` function, which is responsible for registering a new driver.

2. Develop the `createDriver` function so that it passes our tests.

3. Create the POST `/drivers` route

Now that we have our POST `/drivers` route ready, we can create middleware to validate your requests:

4. (Optional) Create tests for a middleware that validates that the `name` key is required.

5. (Optional) Create the middleware and use it in the POST `/drivers` route.

- To perform the optional exercises, we suggest that you create the following files:
  - The `tests/unit/middlewares/validateDriverNameField.middleware.js file`;
  - The `src/middlewares/validateDriverNameField.js file`;

---

### 🚀 Exercise 3
- To perform exercise 3, you will need to create the following files:
  - The `tests/unit/controllers/mocks/car-exercises.controller.mock.js file`;
  - The `filetests/unit/controllers/car-exercises.controller.test.js`;
  - The `rc/controllers/car.controllers.js file`;
  - The `rc/routers/car.router.js file`;

Now that you've made the `controller` for the `createDriver` function with its tests and routes, do the same for the `createCar` function, which is our function responsible for registering a new car.

1. Develop tests for the `carController.createCar()` function, which is responsible for registering a new car.

2. Develop the `createCar` function so that it passes our tests.

3. Create the POST `/cars` route

Now that we have our POST `/cars` route ready, we can create middleware to validate your requests:

4. (Optional) Create tests for a middleware that validates that the `model, color, and licensePlate` keys are required.

5. (Optional) Create the middleware and use it in the POST `/cars` route.

- To perform the optional exercises, we suggest that you create the following files:
  - The `tests/unit/middlewares/validateCarFields.middleware.js file`;
  - The `src/middlewares/validateCarFields.middleware.js file`;

> 👀 Keeping an eye on the tip 👀: The entire application is practically "ready". What will make the tests fail is the absence of the POST `/cars` route.