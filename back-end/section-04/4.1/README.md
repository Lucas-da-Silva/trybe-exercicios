# Node.js: Asynchronous Runtime

Before starting, create a new folder and inside it, create a Node.js package with the npm init command. This package will be called `my-scripts`. Perform the exercises inside this package.

## Exercises - now the practice

### [Exercise 1](./exercises/bmi.js)

🚀 Create a code to calculate a person's body mass index (BMI).

---

### [Exercício 2](./exercises/bmi.js)

🚀 Now allow the code to run via the `npm run bmi` command.
- The new code created must contain the command that calls `node` to execute the `bmi.js` file.

--- 

### [Exercise 3](./exercises/bmi.js)

🚀 It's time to make our code more interactive! Let's add input inputs for anyone to use.

- Edit the code so that the `weight` and `height` values are informed by the person when answering the questions: “What’ your weight?” and “What’ your height?”, you must use the `readline-sync` package.

---

### [Exercise 4](./exercises/bmi.js)

🚀 Now we have a problem, weight is not a whole number! This means that we need to change a little bit the way we request the input of this data.

---

### [Exercise 5](./exercises/bmi.js)

🚀 Let's make our exercise a little more sophisticated. In addition to printing the BMI on the screen, also print which category that BMI falls into.

---

### [Exercise 6](./exercises/exercise6/)
Use the data below to complete the requirements. Save the data inside a file named `simpsons.json`:

<details>
<summary><code>simpsons.json</code></summary>

```
[
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]
```

</details>

> Use async/await to write your code. Try not to use callbacks.

[A](./exercises/exercise6/readSimpsons.js) - Create a function that reads all data from the file and prints each character in the format `id - Name`. For example: `1 - Homer Simpson`.

[B](./exercises/exercise6/getSimpsonsId.js) - Create a function that receives the `id` of a character as a parameter and returns a `Promise` that is resolved with the data of the character that has the given `id`. If there is no character with the given `id`, reject the Promise with the reason “id not found”.

[C](./exercises/exercise6/removeSimpsons.js) - Create a function that changes the `simpsons.json` file removing the characters with `id` 10 and 6.

[D](./exercises/exercise6/createSimpsonFamily.js) - Create a function that reads the `simpsons.json` file and creates a new file, called `simpsonFamily.json`, containing characters with `id` from 1 to 4.

[E](./exercises/exercise6/addPersonSimpsonFamily.js) - Create a function that adds the character `Nelson Muntz` to the `simpsonFamily.json` file.

[F](./exercises/exercise6/changePersonSimpsonFamily.js) - Create a function that replaces the character `Nelson Muntz` with the character `Maggie Simpson` in the `simpsonFamily.json` file.

> Click on the <strong>initial letters</strong> of the questions to be redirected to the file

---

## Exercises - bonus

1. Create code that displays the value of the first `n` elements of the Fibonacci sequence.

    > The Fibonacci sequence starts with 0 and 1 and the following numbers are always the sum of the two previous numbers.

    - Store the code in the `fibonacci.js` file.
    - Use `readline-sync` to perform data input.
    - The code must be triggered through the `npm run fibonacci` command.
    - Do not print the value `0`, as it is not included in the sequence.
    - When `n = 10`, exactly 10 elements must be displayed.
    - Add validations to ensure that the value entered is an integer greater than 0.

2. Create a function that takes three parameters and returns a `Promise`.

    - If any of the parameters received is not a number, reject the Promise with the reason `"Enter numbers only"`.
    - If all parameters are numeric, add the first two and multiply the result by the third (`(a + b) * c`).
    - If the result is less than 50, reject the Promise with the reason `"Value too low"`
    - If the result is greater than 50, solve the Promise with the value obtained.