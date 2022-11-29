# JWT - (JSON Web Token)

## Exercises - now the practice

Before starting, create a new project called `hello-jwt` using the command `npm init @tryber/backend hello-jwt`, accepting the default options.

> The following exercises were developed in the directory [hello-jwt](./hello-jwt/).

1. 🚀 Create a `POST /login` endpoint.
- The endpoint must receive the following data in the request body:
```
    {
      "username": "anyUsername",
      "password": "anyPassword"
    }
```

- If both `username` and `password` are valid, return a token that meets the following specifications:
  - Expires in one hour;
  - Contains, in the payload, the username informed in the request;
  - Contains, in the payload, an `admin` property, with the value `false`.
  - To return the token, use the following format in the response body:
```
    {
      "token": "<JWT here>"
    }
```

- For `username` to be valid, its value must be an alphanumeric string of at least 5 characters.
- For `password` to be valid, its value must be a string of at least 5 characters.

2. 🚀 Change the `POST /login` endpoint:
- If `username` is `admin` and `password` is `s3nh4S3gur4???`, the `admin` key in the generated token payload must have the value `true`.

3. 🚀 Create the `/GET /users/me` endpoint:
- The endpoint can only be accessed by authenticated people.
- To perform authentication, the request must contain the `Authorization` header, whose value must be a valid token.
- If the token does not exist, return the status `401 Unauthorized`, with the following response body:
```
    {
      "error": {
        "message": "Token not found"
      }
    }
```

4. If an error occurs when validating the token, return the status `401 Unauthorized` with the following content in the body:
```
    {
      "error": {
      "message": "<library error message>"
      }
    }
```

5. If the token is valid, return the status `200 OK` and, in the body of the response, the username to which that token belongs and the value of the `admin` property, in the following format:
```
    {
      "username": "token username",
      "admin": true || false
    }
```

6. Use unique middleware for authentication. Store it in the `middlewares/auth`.js file.

7. 🚀 Create the `/GET /top-secret` endpoint.

- The endpoint can only be accessed by authenticated people.
- Only tokens containing, in the payload, the `admin` property with the value `true` are authorized to access this endpoint.
- If the token does not exist, return the status `401 Unauthorized`, with the following response body:
```
    {
      "error": {
        "message": "Token not found"
      }
    }
```

- If an error occurs when validating the token, return the status `401 Unauthorized` with the following content in the body:
```
    {
      "error": {
      "message": "<library error message>"
      }
    }
```

- If the token is valid and the payload contains `admin` with the value `false`, return the following JSON:
```
    {
      "error": {
        "message": "Restricted access"
      }
    }
```

- If the token is valid and the payload contains `admin` with the value `true`, return the following JSON:
```
    {
      "secretInfo": "Peter Parker is Spider-Man"
    }
```

- To validate that the person is admin, create new middleware in the `middlewares/admin.js` file.

---

## Exercises - bonus

1. 🚀 Create the `POST /signup` endpoint.
- The endpoint must accept the following JSON in the request body:
```
    {
      "username": "MariaCecília_Souza92",
      "password": "%9!%e'c0c5w,q%%h9n3k"
    }
```

- To validate the fields, consider the same criteria as the `POST /login` endpoint.
- If `username` already exists, return status `409 Conflict` and the following JSON:
```
    {
      "error": { "message": "user already exists" }
    }
```

- If the fields are valid, store the data in the `src/models/data/users.json` file.
- When storing the received data, add the `admin` property, which will have its value determined as follows:
  - Get a random number from 1 to 100 with the following code snippet: `Math.floor(Math.random() * 100)`;
  - If the random number is greater than `50`, `admin` must be `true`;
  - If the random number is less than or equal to `50`, `admin` must be `false`.
- After storing the new data, return a token that expires in one hour and contains `username` and `admin` in the payload. Use the following format in the response:
```
    {
      "token": "<token generated here>"
    }
```

2. 🚀 Change login endpoint:
- Before generating the token, verify that the entered username and password exist in the `users.json` file.
- No longer allow `admin` user login with fixed password.
Enter, in the `admin` property of the token's payload, the same value as the `admin` property that is stored for that person.