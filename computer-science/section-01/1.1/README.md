# Learning python

## Exercises - now the practice

🚀 **Exercise 1:** Create a function that receives two numbers and returns the largest one.

🚀 **Exercise 2:** Calculate the arithmetic mean of the values contained in a list.

**Exercise 3:** Write a program that, given any value `n`, such that `n > 1`, prints on the screen a square made of asterisks of side length `n`. For example:

```python
n = 5

*****
*****
*****
*****
*****
```

🦜Tip: Python knows how to multiply sequences! For example, `3 * 'bla'` results in `blablabla`. This applies to lists too, in case you need it.

🚀 **Exercise 4:** Create a function that receives a list of names and returns the name with the most characters. For example, for `["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]`, the return must be `"Fernanda"`.

🦜 A tip: Use the `len()` function to check the length of the name.

**Exercise 5:** Assume that the paint coverage is 1 liter for every 3 square meters and that the paint is sold in 18-liter cans, which cost R$ 80.00. Create a function that returns two values in a tuple containing the amount of paint cans to be purchased and the total price based on the size of a wall (in m²).

**Exercise 6:** Create a function that receives the three sides of a triangle and informs the type of triangle formed or `"it is not a triangle"`, in case it is not possible to form a triangle.

🦜 Tip:

```
   Three sides form a triangle when the sum of any two sides is greater than the third;
   Equilateral Triangle: three equal sides;
   Isosceles triangle: any two equal sides;
   Scalene triangle: three different sides.
```

---

### Exercises - bonus

**Exercise 7:** Given a list, find the smallest element. For example, `[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]` should return `2`.

**Exercise 8:** Write a program that, given any value `n`, such that `n > 1`, prints on the screen a right triangle with `n` base asterisks. For example, for `n = 5` the triangle will have 5 asterisks at the base:

```python
n = 5

*
**
***
****
*****
```

**Exercise 9:** Create a function that receives an integer `N` and returns the sum of all numbers from 1 to `N`. For example, for `N = 5`, the expected value will be `15`.

**Exercise 4:** A gas station is selling fuel with the following discount table:

```
   Alcohol:
     - Up to 20 litres, 3% discount per litre;
     - Above 20 liters, 5% discount per liter.
   Gasoline:
     - Up to 20 litres, 4% discount per litre;
     - Above 20 liters, 6% discount per liter.
```

Write a function that receives the number of liters sold, the type of fuel (coded as follows: A - alcohol, G - gasoline), and returns the amount to be paid by the customer, knowing that the price of a liter of gasoline is R$2.50, and the price of a liter of alcohol is R$1.90.