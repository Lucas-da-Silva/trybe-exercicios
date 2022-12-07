import { questionFloat, keyInSelect } from "readline-sync";

const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = questionFloat('Enter the value to be converted: ');
  const fromUnitChoiceIndex = keyInSelect(units, "Choose a number for the base unit: ");
  const toUnitChoiceIndex = keyInSelect(units, "Choose a number for the conversion unit: ");
  
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