# Introduction to Object Orientation

> In the directory [to fix](./to-fix/) are the exercises developed during the class.

## Exercises - [now the practice](./now-the-practice/)

**Exercise 1:** Let's model some parts of a school's software. Write a class whose objects will represent people students enrolled in a course. Each object of this class must contain the following data: enrollment, name, 4 test notes, 2 work notes.

**Exercise 2:** Now let's add behaviors to our student person class. To this add two methods: one that calculates the sum of the student person's grades and another that calculates the average of the student person's grades.

**Exercise 3:** Let's change our context a little to a cafeteria sales system. Create a class that represents a diner customer, a class that represents an order, and a class that represents an order item.

- The customer person must contain the name;
- The order item must contain the name of the order (eg “French fries”; “Açaí”) and price;
- The order must contain the customer, the items consumed, the payment method (ex: "card", "cash") and the percentage in decimal discount for the order (ex: 0.1 for 10%, 0.3 for 30%), the order may or may not have a discount.

**Exercise 4:** Now let's add behaviors to our classes from the previous exercise. The class representing the order should have two methods: one that calculates the order total and another that calculates the total by applying the discount amount.

**Exercise 5:** Write a Date class whose instance represents a date. This class should contain three attributes: the day, the month and the year.

**Exercise 6:** Let's add behaviors to our Date class from the previous exercise. This class should contain the following methods:

- constructor: must check if the date passed by parameter is a valid date, if not, create a date with value “01/01/1900”;
- getMonthName: returns the month of the date in full;
- isLeapYear: returns true if the year is a leap year and false if not;
- compare: receives as a parameter another object of the Date class, compares it with the current date and returns:
  - 0 if the dates are equal;
  - 1 if the current date is later than the parameter date;
  - -1 if the parameter date is after the current date.
- format: receives as a parameter a day, month and year format and returns the formatted date.
  - Subtitle:
    - yyyy = four-digit year
    - yy = two-digit year
    - mm = month with 2 digits
    - M = month in full
    - dd = day with 2 digits
  - Examples:
    - “dd/mm/yyyy” = 01/01/1900
    - “yyyy-mm-dd” = 1900-01-01
    - “dd of M of yy” = January 1, 90
    - “dd, M for yyyy” = 01, January 1990