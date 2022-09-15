// #1 
const wakeUp = () => 'Acordando';
// #2
const coffee = () => 'Bora tomar café!!';
// #3
const toSleep = () => 'Partiu dormir!!';

// #4
const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(coffee);
doingThings(toSleep);
