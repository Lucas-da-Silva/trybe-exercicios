# Object-Oriented APIs and NoSQL: Inheritance and Abstraction

## Exercises - now the practice 

### Exercise 1:
What are `Design Patterns` and what are they for? What are their three classifications/categorizations/families?

<details>
<summary>Answer</summary>

Design patterns are conventional solutions to common problems in software design. The pattern is a general concept, an idea, a philosophy, for solving problems.

Standards can be divided into three families:

- Creational patterns;
- Structural patterns;
- Behavioral patterns.

</details>

### Exercise 2:
Within the `creational pattern` family, describe the “Problem to be Solved” and the “Purpose” of the `Singleton` and `Factory Method` patterns

<details>
<summary>Answer</summary>

**Singleton**: It avoids the problems of multiple instantiating a resource, such as a database connection, that can cause problems. The **Singleton** pattern allows you to ensure that a class has only a single instance, while providing a global access point to that instance.

**Factory Method**: It avoids the problem of adding new features to a software and having to change the entire base. The `Factory Method` pattern provides an interface for creating objects in a superclass, but allows subclasses to change the type of objects that will be created.

</details>

### Exercise 3:
Within the `structural pattern` family, describe the “Problem to be Solved” and the “Purpose” of the `Adapter` and `Facade` patterns

<details>
<summary>Answer</summary>

**Adapter**: It aims to solve incompatibility problems between objects, such as codes developed in a framework that need to work in another. The `Adapter` pattern allows objects with incompatible interfaces to collaborate with each other.

**Facade**: It avoids the problem of coupling all the business logic into classes in order to be able to unite a set of objects that belong to a library or framework. The `Facadee` pattern provides a simplified interface to a library, framework or any complex set of classes. That is, we define an interface that will standardize the communication between the code and the new technology.

</details>

### Exercise 4:
Within the `behavioral pattern` family, describe the “Problem to be Solved” and the “Purpose” of the `Strategy` and `Observer` patterns

<details>
<summary>Answer</summary>

**Strategy**: It solves the problem of gigantic application code with many similar business rules in different places, which becomes very difficult to maintain and make changes. The `Strategy` pattern allows you to define a family of algorithms, put them in separate classes and make their objects interchangeable.

**Observer**: The `Observer` pattern allows you to define a subscription mechanism to notify multiple objects of any events that happen to the object they are observing.

</details>

### Exercise 5: 🚀
Now enhance the `TRIX` application and add one more key possibility for the end user. This should allow the user to make transactions with a 36-character random key (like this one, for example: 123e4567-e12b-12d1-a456-426655440000). Note that the first four sets are made up of letters and numbers, but the last set is made up of numbers

### Exercise 6: 🚀
Still in the `TRIX` application, create a new endpoint to return all the keys of an owner person (owner)