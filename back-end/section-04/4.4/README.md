# Node.js: Express and Middlewares

> During the class the [soccer-team-manager](./soccer-team-manager/src/) API, which was developed in day `4.2` of `section-04`, was improved with several Middlewares.

## Exercises - now the practice

### [Exercise 1](./exercises/app.js) 🚀

An Ecotourism startup came to you to build a back-end application that helps in creating and sharing places not yet registered in nature. The objective is to value and promote the tourist capacity of Brazil and the main API requirements that this startup requested are:

- Register new ecotourism activities with the following information:
  - Activity name;
  - Price;
  - Description: containing evaluation, difficulty and date of creation of the activity.

Analyzing the above requirements, the Tech Lead person identified the following keys for the request:

```
{
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Easy",
    "createdAt": "10/08/2022"
  }
}
```

Now, do the exercises below:

1. Create a Node.js server using the Express framework with the initial structure of `app.js` and `server.js` and prepare the environment by installing the `nodemon` library.

2. Add community-built middleware that interprets `JSON` content.

3. Create a `POST` endpoint with the `/activities` route to add new activities. She must:

    - Return status `201` and a success message when the activity has been entered (json format);
    - <strong>Suggestion:</strong> `{ "message": "Activity registered successfully!" }`.

4. Create validation middleware for the `name` key. She must:

    - be mandatory;

    - Return status `400` and a message in json format;

      - <strong>Suggestion:</strong> `{ "message": "The name field is required" }`.
    - Have more than 4 characters;

    - Return status `400` and a message in json format;

      - <strong>Suggestion:</strong> `{ "message": "The name field must be at least 4 characters long" }`.

5. Create a validation middleware for the price key. She must:

    - be mandatory;

    - Return status 400 and a message in json format;

      - <strong>Suggestion:</strong> `{ "message": "Price field is required" }`.
    - Be a number greater than or equal to zero;

    - Return status `400` and a message in json format;

      - <strong>Suggestion:</strong> { "message": "The price field must be a number greater than or equal to zero" }.

6. Create validation middleware for the description key that has `createdAt`, `rating`, and `difficulty` keys. She must:

    - Have all required keys;
    - Return status `400` for all and a message in json format;
      - <strong>Suggestion:</strong> `{ "message": "The description field is required" }`;
      - <strong>Suggestion:</strong> `{ "message": "The createdAt field is required" }`;
      - <strong>Suggestion:</strong> `{ "message": "The rating field is required" }`;
      - <strong>Suggestion:</strong> `{ "message": "The difficulty field is required" }`.

7. Create validation middleware for the createdAt key. She must:

    - Have a valid date in `dd/mm/yyyy format`;
    - Return status `400` and a message in json format;
      - <strong>Suggestion:</strong> `{ "message": "The createdAt field must have the format \'dd/mm/yyyy\'" }`.

8. Create validation middleware for the `rating` key. She must:

    - Have an integer between 1 and 5;
    - Return status `400` and a message in json format;
      - <strong>Suggestion:</strong> `{ "message": "The rating field must be an integer between 1 and 5" }`.

9. Create validation middleware for the `difficulty` key. She must:

    - Have only 3 ratings: “Easy”, “Medium” or “Difficult”;
    - Return status `400` and a message in json format;
      - <strong>Suggestion:</strong> `{ "message": "The difficulty field must be \'Easy\', \'Medium\' or \'Hard\'" }`.


--- 

### [Exercise 2](./exercises/app.js) 🚀
Congratulations! Your client was very satisfied with the work and asked for some more requirements for you to implement. See below:

- Register users of ecotourism activities with the following information:
  - Email;
  - Password;
  - First name;
  - Telephone;
- Allow only registered people to register new ecotourism activities.

Now, do the exercises below:

1. Create a `POST` endpoint with the `/signup` route to register users. She must:

    - Must have the `email`, `password`, `firstName` and `phone` fields;
    - If the fields are not filled in, return the status `401 - Unauthorized` and a message (json format);
      - <strong>Suggestion:</strong> `{ "message": "Missing fields!" }`.
    - Generate a valid random token;
    - Return status 200 and a message containing the token (json format);
      - <strong>Suggestion:</strong> `{ token:</strong> '<random-token>' }`.

> Keeping an eye on the tip👀: To generate the token you can use the `randomBytes` function, from the Node `crypto` module, like this:

```
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;
```

2. Create authentication middleware to the POST endpoint with the `/activities` route. She must:

    - Be validated through the token that was generated when performing the `signup`;
    - Be found by the `Authorization` header;
    - Be exactly 16 characters long;
    - If the token is invalid or non-existent, return the status `401 - Unauthorized` and a message (json format);
      - <strong>Suggestion:</strong> `{ "message": "Invalid token!" }`.
