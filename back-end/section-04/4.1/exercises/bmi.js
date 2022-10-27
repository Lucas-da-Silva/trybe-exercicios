const readline = require('readline-sync');

function getBmi(bmi) {
  if (bmi < 18.5) {
    return 'Below 18.5: Underweight';
  } else if (bmi < 25) {
    return 'Between 18.5 and 24.9: Normal weight';
  } else if (bmi < 30) {
    return 'Between 25 and 29.9: Overweight';
  } else if (bmi < 35) {
    return 'Between 30 and 34.9: Obese Class I';
  } else if (bmi < 40) {
    return 'Between 35 and 39.9: Obese Class II';
  } else {
    return 'Over 40: Obese Class III';
  }
}

function calculateBmi() {
  const weight = readline.questionFloat('What is your weight? ');
  const height = readline.questionFloat('What is your height? ');

  const bmi = weight / height ** 2;
  return getBmi(bmi.toFixed(2));
}

console.log(calculateBmi());
