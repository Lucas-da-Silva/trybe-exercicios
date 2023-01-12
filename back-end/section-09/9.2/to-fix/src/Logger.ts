interface Logger {
  log(value: string): void;
}

interface Database {
  message: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(value: string): void {
    console.log(`ConsoleLooger --- ${value}`);
  }
}

class ConsoleLogger2 implements Logger {
  log(value: string): void {
    console.log(`ConsoleLooger2 --- ${value}`);
  }
}

class ExampleDatabase implements Database {
  constructor(public message: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.message.log(`${key}, ${value}`);
  }
}

const logger = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('book', 'Harry Potter');
database2.save('game', 'God of War');
database3.save('serie', 'Severance');
