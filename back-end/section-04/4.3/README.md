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

### [Exercise 1](./cacau-trybe/tests/integration/chocolates.test.js)
Create the integration tests for the GET `/chocolates/total` endpoint

- Create a case for the returned code
- Create another case for the expected return

<strong>Warning:</strong> Note that the tests should fail for now, as we are developing using the TDD concept, but don't worry that in the sequence we will do the implementation and the tests should pass. 👍

--- 

### [Exercise 2](./cacau-trybe/src/app.js)
Implement the GET `/chocolates/total` endpoint in the application

- Create a new endpoint returning the total number of chocolates in the database
- After implementing, verify that the tests pass successfully

---

## Exercises - bonus
<strong>GET `/chocolates/search`: Search for chocolates by name</strong>

- This endpoint should return the chocolates that contain a certain word in their name, using the following contract:

👉 <strong>GET</strong> `/chocolates/search?name=Mo`

- Objective: Return the chocolates that contain the search term;
- Query parameters (query params): `name`, string type;
- HTTP code: `200 - OK`;
- Body (example):

```
[
  {
    "id": 3,
    "name": "Mon Chéri",
    "brandId": 2
  },
  {
    "id": 4,
    "name": "Mounds",
    "brandId": 3
  }
]
```

- If there are no chocolates with the string passed, return an empty array and status 404:
👉 <strong>GET</strong> `/chocolates/search?name=ZZZ`

- Purpose: Return an empty array when there are no chocolates that contain the search term;
- Query parameters (query params): `name`, string type;-
- HTTP code: `404 - Not Found`;
- Body (example):

```
[]
```

### Exercise 3
Create the integration tests for the GET `/chocolates/search` endpoint

- Create a case by checking the code and the expected return for when there are chocolates with the given name;
- Create a case for when there are no chocolates with the given name;
- Check if the tests fail successfully.

--- 

### Exercise 4
Implement the GET `/chocolates/search` endpoint in the application

- Create a new endpoint returning the chocolates that have the string name in the database;
- After implementing, verify that the tests pass successfully.

--- 

<strong>PUT `/chocolates/:id`: Updates a chocolate</strong>

- This endpoint must update a chocolate that exists in the database, using the following contract:

👉 <strong>PUT</strong> `/chocolates/1`

- Objective: Update a chocolate that exists in the database.
- Request body (example):

```
{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```

- HTTP code: `200 - OK`;
- Response body (example):

```
{
  "chocolate": { 
    "id": 1,
    "name": "Mint Pretty Good",
    "brandId": 2
  }
}
```

- If there is no chocolate with the `id` passed, return an error message with status 404:

👉 <strong>PUT</strong> `/chocolates/555`

- Purpose: Return an error message when there is no chocolate with the given id.
- Request body (example):

```
{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```

- HTTP code: `404 - Not Found`
- Response body (example):

```
{ 
  "message": "chocolate not found"
}
```

### Exercise 5
Create the integration tests for the PUT `/chocolates/:id` endpoint

- Create a case by checking the code and the expected return for when the chocolate is updated;
- Create a case for when there is no chocolate with the informed id;
- Check if the tests fail successfully.

### Exercise 6
Implement the PUT `/chocolates/:id` endpoint in the application

- Create a new endpoint that updates a chocolate in the database;
- After implementing, verify that the tests pass successfully.
