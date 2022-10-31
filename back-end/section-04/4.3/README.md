# Node.js: Integration Tests

> During the class most of the [cacao-trybe](./cacau-trybe/) API and tests were developed. I just developed the codes related to the following exercises.

## Exercises - now the practice

<strong>GET `/chocolates/total` : Total amount of chocolates</strong>

- This endpoint must return the number of types of chocolates that exist in the database, using the following contract:

  👉 <strong>GET</strong> `/chocolates/total`

- Objective: Return the number of types of chocolates that exist.
- HTTP code: 200 - OK;
- Body (example):

```
{
  "totalChocolates": 4 // amount of chocolates in the database
}
```

### [Exercício 1](./cacau-trybe/tests/integration/chocolates.test.js)
Create the integration tests for the GET `/chocolates/total` endpoint

- Create a case for the returned code
- Create another case for the expected return

<strong>Warning:</strong> Note that the tests should fail for now, as we are developing using the TDD concept, but don't worry that in the sequence we will do the implementation and the tests should pass. 👍

--- 

### [Exercício 2](./cacau-trybe/src/app.js)
Implement the GET `/chocolates/total` endpoint in the application

- Create a new endpoint returning the total number of chocolates in the database
- After implementing, verify that the tests pass successfully
