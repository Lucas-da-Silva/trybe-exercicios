class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[]
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(connect: string | undefined) {
    if (!connect || this._connections.includes(connect)) {
      this._connectedTo = connect;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

  turnOn(): void {
    console.log(`Brand: ${this._brand}, 
Size in inches: ${this._size}, 
Resolution: ${this._resolution}, 
Connections: ${this._connections}`);
  }
}

const tv1 = new Tv('LG', 29, 'FULL HD', ['HDMI', 'Display port']);
tv1.turnOn();
tv1.connectedTo = 'HDMI';
console.log(`Connected to: ${tv1.connectedTo}`);
