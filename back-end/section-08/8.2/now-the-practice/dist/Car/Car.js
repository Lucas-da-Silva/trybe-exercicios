"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    turnOn() {
        console.log('Car on.');
    }
    speedUp() {
        console.log('Accelerating the car.');
    }
    honk() {
        console.log('Buzinando: BIP BIP');
    }
    turn(direction) {
        console.log(`Turning to the ${direction}`);
    }
    speedDown() {
        console.log('Reducing the speed of the car.');
    }
    stop() {
        console.log('Stopping the car.');
    }
    turnOff() {
        console.log('Car off.');
    }
}
exports.default = Car;
