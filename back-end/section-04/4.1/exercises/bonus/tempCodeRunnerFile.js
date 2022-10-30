const readline = require('readline-sync');

const fibonacci = () => {
  const number = readline.questionInt('Enter the length of the sequence: ');
  let first = 0;
  let second = 1;
  let third = 0;
  let sequence = [first, second];
  
  for (let i = 0; i < number - 2; i++) {
    third = first + second;
    sequence.push(third);
    first = second;
    second = third;
  }

  console.log(sequence);
};

fibonacci();