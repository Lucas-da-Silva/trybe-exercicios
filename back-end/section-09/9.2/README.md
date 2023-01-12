# Inheritance and Composition

## [Exercises - now the practice](./now-the-practice/src/)

🚀 **Exercise 1**: Create a new class whose objects will represent a person in our system.

```
`Class`: Person
`Attributes`:
     - name: name of the person
     - birthDate: date of birth of the person
`Methods`:
     - Getters/Setters
     - constructor: must receive as parameter name and date of birth
`Validations`:
     - The name must be at least three characters long
     - Date of birth cannot be a date in the future
     - The person cannot be more than 120 years old
```

To test, create at least two people.

🚀 **Exercise 2**: Refactor our student person class so that it inherits from our person class.

```
`Class`: Student
`Extends`: Person
`Attributes`:
     - enrollment: enrollment of the student
     - examsGrades: exam grades
     - assignmentsGrades: assignment grades
`Methods`:
     - Getters/Setters
     - constructor: must receive as parameter name and date of birth and
       fill in registration automatically
     - sumGrades: returns the sum of the student's grades
     - sumAverageGrade: returns the average grade of the student person
     - generateEnrollment: returns a unique generated string
       as enrollment for student person
`Validations`:
     - Registration number must be at least 16 characters long
     - The student must have a maximum of 4 test scores
     - The student person must have a maximum of 2 grades of work
```

To test, create at least five student people.

🚀 **Exercise 3**: Create an interface that will represent an employee person.

```
`Interface`: Employee
`Attributes`:
     - registration: registration number
     - salary: salary amount
     - admissionDate: admission date
`Methods`:
     - generateRegistration: returns a unique string generated as registration
```

🚀 **Exercise 4**: Create a class whose objects represent a subject taught at school.

```
`Class`: Subject
`Attributes`:
     - name: course name
`Methods`:
     - Getters/Setters
     - constructor: must receive name as a parameter
`Validations`:
     - The name must have at least 3 characters
```

To test, create the subjects Mathematics, History, Philosophy.

🚀 **Exercise 5**: Create a class whose objects represent a teacher person.

```
`Class`: Teacher
`Extends`: Person
`Implements`: Employee
`Attributes`:
     - subject: the subject taught by the teacher
`Methods`:
     - Getters/Setters
     - constructor: must receive as parameter name, date of birth, salary
       and the discipline
`Validations`:
     - The record must have at least 16 characters
     - Salary cannot be negative.
     - The admission date cannot be in the future
```

To test, create a teacher person for each subject created in the previous exercise.
