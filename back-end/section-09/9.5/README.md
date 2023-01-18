# SOLID - Principles L and I

> The [solid-2](./solid-2/src/) directory files were developed during the class.

## [Exercises - now the practice](./now-the-practice/)

> _The following code will be used in Exercises 1, 2 and 3._

The program returns information related to a person's zip code and has two functionalities:

- Consult an `address` from a `zip code` and a street `number`
- Consult a `zip code` based on an `address` and street `number`

```TS
// ./FooCepAPI.ts
class FooCepAPI {
   async getAddressByCEP(zip: string, number: number): Promise<string> {
     return `The address for "zip:${zip}, n°:${number}" is "address foo"`;
   }

   async getCepByAddress(address: string, number: number): Promise<string> {
     return `The zip code for: "${address}, #: ${number}" is "zip code baz"`;
   }
}

export default FooCepAPI;
```

```TS
// ./CepService.ts
import FooCepAPI from './FooCepAPI';

class ZipService {
   private readonly cepApi: FooCepAPI;

   constructor() {
     this.cepApi = new FooCepAPI();
   }

   addressByZip(zip: string, num: number) {
     return this.cepApi.getAddressByCEP(zip, num);
   }

   cepByAddress(address: string, num: number) {
     return this.cepApi.getCepByAddress(address, num);
   }
}

export default CepService;
```

```TS
// ./index.ts
import CepService from './CepService';

async function main() {
   const cepSvc = new CepService();

   console.log(
     'get address by zip',
     '->',
     await cepSvc.addressByCep('xx.xxx-xx', 10),
   );
   console.log(
     'get zip code by address',
     '->',
     await cepSvc.cepByAddress('street foo, between bar and baz', 10),
   );
}

main();
```

**Exercise 1**: - Apply the dependency injection technique so that the `CepService` class decreases its coupling level with the `FooCepAPI` dependency.

**Exercise 2**: - The `CepService` class still depends on a concrete implementation for the API and CEP calls. Apply the `Dependency Inversion principle` to make the `CepService` class completely decoupled.

**Exercise 3**: - Implement a `MockCepApi` class used for performing unit tests. _Note: You do not need to perform the tests._

> _the following code will be used in exercises 4, 5 and 6_

```TS
// ./Vehicle.ts
export interface iVehicle {
   drive(): void;
   fly(): void;
}
```

```TS
// ./FuturisticCar.ts
import { IVehicle } from './interfaces';

export default class FuturisticCar implements IVehicle {
   drive(): void { console.log('Drive a futuristic car'); }

   fly(): void { console.log('Flying a futuristic car'); }
}
```

The objective of the program is to model the behavior of vehicles. Initially, it is assumed that there is only one type of vehicle that **flies**(fly) and _moves_(drive) defined by `IVehicle` and implemented in `FuturisticCar`.

**Exercise 4**: - Implement a new vehicle type with the `Car` class from the existing interface. That vehicle should only be able to move.

**Exercise 5**: - Implement a new vehicle type with the `AirPlane` class from the existing interface. This vehicle must only be able to fly.

**Exercise 6**: - Apply the `Principle of Segregation of Interfaces` in order to separate the implementation of each type of vehicle.
