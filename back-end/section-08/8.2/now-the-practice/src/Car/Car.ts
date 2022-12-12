class Car {
  brand: string;
  color: string;
  doors: number

  constructor (brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn(): void {
    console.log('Car on.');
  }

  
  speedUp(): void {
    console.log('Accelerating the car.');
  }

  honk(): void {
    console.log('Buzinando: BIP BIP');
  }
  
  turn(direction: string): void {
    console.log(`Turning to the ${direction}`);
  }

  speedDown(): void {
    console.log('Reducing the speed of the car.');
  }

  stop(): void {
    console.log('Stopping the car.');
  }

  turnOff(): void {
    console.log('Car off.');
  }
}

export default Car;