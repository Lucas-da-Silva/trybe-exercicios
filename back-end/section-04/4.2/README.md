# Node.js: REST API with Express

In the [soccer-team-manager](/soccer-team-manager/) directory is an `API` developed during the trybe class.

## [Exercises - now the practice](./exercises/)

### Exercise 1

What is the function of status code `400` and `422`?

<details>
<summary>Answer</summary>

<strong>`400` Bad Request</strong> - The server did not understand the request because it has an invalid syntax.

<strong>`422` Unprocessable Entity</strong> - The request is well formed but unable to be followed due to semantic errors.

</details>

---

### Exercise 2

What is the function of the `401` status code?

<details>
<summary>Answer</summary>

<strong>`401` Unauthorized</strong> - The client must authenticate itself to get the requested response.

</details>

---

Create the `src` directory and inside it a `movies.json` file with the movies from our video store:

<details>
<summary>Movies</summary>

```
[
  {
    "id": 1,
    "movie": "Avatar",
    "price": 5
  },
   {
    "id": 2,
    "movie": "Gente Grande",
    "price": 2
  },
  {
    "id": 3,
    "movie": "O Jogo",
    "price": 3
  },
  {
    "id": 4,
    "movie": "Quebrando a Banca",
    "price": 5
  },
  {
    "id": 5,
    "movie": "Lilo & Stitch",
    "price": 2
  },
  {
    "id": 6,
    "movie": "Os Fantasmas se Divertem",
    "price": 2
  },
  {
    "id": 7,
    "movie": "Meninas Malvadas",
    "price": 3
  }
]
```

</details>

Now, do the following exercises:

### [Exercise 3](./exercises/src/server.js)
Create a Node.js server using the Express framework.

--- 

### [Exercise 4](./exercises/src/readJson.js)
Create a JSON read function with the fs module.

---

### [Exercise 5](./exercises/src/app.js)
Create a `GET` endpoint with the `/movies/:id` route, which can list a JSON movie by `id`.

---

### [Exercise 6](./exercises/src/app.js)
Create a `GET` endpoint with the `/movies` route, which can list all JSON movies.

---

### [Exercise 7](./exercises/src/app.js)
Create a `POST` endpoint with the `/movies` route to register a new movie in JSON.

The request body must have the following format:

```
{
  "movie": "Vingadores",
  "price": 5
}
```

---

### [Exercise 8](./exercises/src/app.js)
Create a `PUT` endpoint with the `/movies/:id` route that can edit information from a movie from JSON.

The request body must have the following format:

```
{
  "movie": "Vingadores: Ultimato",
  "price": 5
}
```

---

### [Exercise 9](./exercises/src/app.js)
Create a `DELETE` endpoint with the `/movies/:id` route that can delete a movie from JSON.

---

### Exercises - bonus

### [Exercise 10](./exercises/src/app.js)
Create a `GET` endpoint with the `/movies/search` route, which can list all JSON movies.

- The route must receive the information by `query` and the key must be called `q`. The key will bring the value of 'people', for example, and the filter should bring only the movies with that term, if it doesn't find it, bring an empty array.
