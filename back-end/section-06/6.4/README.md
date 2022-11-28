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