const readline = require('readline-sync');

const fibonacci = () => {
  const number = readline.questionInt('Enter the length of the sequence: ');
  
  if(number <= 0) return console.log('Invalid number, must be greater than 0');

  let first = 0;
  let second = 1;
  let third = 0;
  let sequence = [second];
  
  for (let i = 0; i < number - 1; i++) {
    third = first + second;
    sequence.push(third);
    first = second;
    second = third;
  }

  console.log(sequence);
};

fibonacci();