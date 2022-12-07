"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
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
