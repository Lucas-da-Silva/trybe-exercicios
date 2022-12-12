// ./index.ts

import PizzaVegetarian from "./PizzaVegetarian";
import PizzaCommon from "./PizzaCommon";
import PizzaSugar from "./PizzaSugar";

const calabresa: PizzaCommon = {
  flavor: "Calabresa",
  slices: 6
}

console.log(calabresa);

const chicken: PizzaCommon = {
  flavor: "Chicken",
  slices: 8
}

console.log(chicken);

const pepperoni: PizzaCommon = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const margherita: PizzaVegetarian = {
  flavor: "Margherita",
  slices: 8
}

console.log(margherita);

const palmito: PizzaVegetarian = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const nutella: PizzaSugar = {
  flavor: "Nutella",
  slices: 4
}

console.log(nutella);