const randomNumber = () => Math.floor((Math.random() * 5) + 1);

const raffle = (number , random) => {
    if (number === random) {
        console.log('Parabéns você ganhou');
    } else {
        console.log('Tente novamente')
    }
};

raffle(3, randomNumber());