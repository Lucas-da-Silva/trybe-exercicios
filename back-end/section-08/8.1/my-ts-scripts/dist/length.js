"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // we get the base unit index in the array
    const toIndex = units.indexOf(toUnit); // we get the unit index for the conversion
    const exponent = (toIndex - fromIndex); // we calculate the exponent from the difference of the index
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = (0, readline_sync_1.questionFloat)('Enter the value to be converted: ');
    const fromUnitChoiceIndex = (0, readline_sync_1.keyInSelect)(units, "Choose a number for the base unit: ");
    const toUnitChoiceIndex = (0, readline_sync_1.keyInSelect)(units, "Choose a number for the conversion unit: ");
    const fromUnitChoice = units[fromUnitChoiceIndex];
    const toUnitChoice = units[toUnitChoiceIndex];
    if (!fromUnitChoice || !toUnitChoice) {
        console.log('Function canceled');
        return 0;
    }
    const converted = convert(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} it's the same as ${converted}${toUnitChoice}`;
    console.log(message);
}
exec();
