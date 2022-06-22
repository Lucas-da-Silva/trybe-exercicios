const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = () => {
    let score = 0;
    for(let index = 0; index < RIGHT_ANSWERS.length; index +=1) {
        if (STUDENT_ANSWERS[index] === RIGHT_ANSWERS[index]) {
            score += 1;
        } else if (STUDENT_ANSWERS[index] === 'N.A') {
            score = score;
        } else {
            score -= 0.5;
        }
    };
    return score;
};

const test = (correct, student, func) => {
    console.log(`Você acertou ${func} questões.`);
};

test(RIGHT_ANSWERS, STUDENT_ANSWERS, check());