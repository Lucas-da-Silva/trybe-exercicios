# SOLID - Introduction and Principles S, O and D

> The contents of the [principles-srp-ocp-and-dip](./principles-srp-ocp-and-dip/) directory were developed during the class.

## Exercises - now the practice

An application is provided that controls a catalog of plants for a botany institute. This API was written in Typescript and is divided into layers according to the MSC architecture (Model, Service and Controller). Transcribe the codes below to Visual Studio Code:

> ./tsconfig.json

```JSON
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2019",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true
  }
}
```

> ./package.json

```JSON
{
  "name": "solid-1-exercises",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "npx -y tsc",
    "prestart": "npm run build",
    "start": "node ./build/server.js",
    "dev": "tsnd ./src/server.ts",
    "lint": "eslint . --ext .ts"
  },
  "keywords": [
    "typescript",
    "solid",
    "refactor"
  ],
  "author": "Pessoa Estudante",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "4.17.14",
    "@types/node": "18.11.7",
    "@typescript-eslint/eslint-plugin": "5.41.0",
    "@typescript-eslint/parser": "5.41.0",
    "eslint": "8.26.0",
    "eslint-config-airbnb-typescript": "17.0.0",
    "eslint-config-trybe-backend": "2.1.0",
    "eslint-plugin-import": "2.26.0",
    "ts-node": "10.9.1",
    "ts-node-dev": "2.0.0",
    "typescript": "4.8.4"
  },
  "dependencies": {
    "express": "4.18.2"
  }
}
```

> ./.eslintrc.json

```JSON
{
  "root": true,
  "env": {
    "browser": false,
    "node": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:mocha/recommended",
    "airbnb-typescript/base"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "no-console": "off",
    "consistent-return": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ]
  }
}
```

> ./src/server.ts

```TypeScript
import App from './App';

const PORT = 3001;

new App().start(PORT);
```

> ./src/App.ts

```TypeScript
import express, { Request, Response } from 'express';
import PlantRouter from './router/PlantRouter';
import errorMiddleware from './middlewares/errorMiddleware';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();

    this.app.get('/', (req: Request, res: Response) => res.json({ ok: true }));
    this.app.use(errorMiddleware);
  }

  private routes(): void {
    this.app.use('/plants', PlantRouter);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
```

> ./src/controllers/PlantController.ts

```TypeScript
import { Request, Response, NextFunction } from 'express';
import PlantService from '../services/PlantService';

class PlantController {
  public service: PlantService = new PlantService();

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plants = await this.service.getAll();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plant = await this.service.create(req.body);
      return res.status(201).json(plant);
    } catch (error) {
      next(error);
    }
  }
}

export default PlantController;
```

> ./src/exceptions/HttpException.ts

```TypeScript
class HttpException extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export default HttpException;
```

> ./src/models/database/opsInfo.json

```JSON
{
  "createdPlants": 2
}
```

> ./src/models/database/plantsData.json

```JSON
[
  {
    "id": 1,
    "breed": "Bromélia",
    "size": 102,
    "needsSun": false,
    "origin": "Argentina",
    "waterFrequency": 67.83
  },
  {
    "id": 2,
    "breed": "Orquídea",
    "size": 99,
    "needsSun": true,
    "origin": "Brazil",
    "waterFrequency": 84.23
  }
]
```

> ./src/router/PlantRouter.ts

```TypeScript
import { Router } from 'express';
import PlantController from '../controllers/PlantController';

const plantController = new PlantController();

const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));

export default plantRouter;
```

> ./src/services/PlantService.ts

```TypeScript
import fs from 'fs/promises';
import path from 'path';
import HttpException from '../exceptions/HttpException';

interface IPlant {
  id: number,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  waterFrequency: number,
}

type INewPlant = Omit<IPlant, 'id' | 'waterFrequency'>;

interface IOpsInfo {
  createdPlants: number
}

class PlantService {
  private readonly plantsFile = path.join(__dirname, '..', 'models', 'database', 'plantsData.json');

  private readonly opsFile = path.join(__dirname, '..', 'models', 'database', 'opsInfo.json');

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const dataRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    const opsInfo: IOpsInfo = JSON.parse(dataRaw);
    opsInfo.createdPlants += incrementAmount;

    await fs.writeFile(this.opsFile, JSON.stringify(opsInfo, null, 2));

    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);
    return plants;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    const {
      breed,
      needsSun,
      origin,
      size,
    } = plant;

    if (typeof breed !== 'string') {
      throw new HttpException(400, 'Attribute "breed" must be string.');
    }

    if (typeof needsSun !== 'boolean') {
      throw new HttpException(400, 'Attribute "needsSun" must be boolean.');
    }

    if (typeof origin !== 'string') {
      throw new HttpException(400, 'Attribute "origin" must be string.');
    }

    if (typeof size !== 'number') {
      throw new HttpException(400, 'Attribute "size" must be number.');
    }

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant, waterFrequency };
    plants.push(newPlant);

    await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
    return newPlant;
  }
}

export default PlantService;
```

The next step is to install the dependencies by running the `npm install` command in the project's root directory.

The application can be started with the command `npm start`, or `npm run dev`, if you prefer to start in development mode.

### Starting

First you must analyze all the application code to understand how it works.

In summary, the application has the following endpoints:

- `GET /plants`: returns all plants;
- `POST /plants`: creates a new plant.

Using a _client_ such as Insomnia, Postman or Thunder Client, check the information obtained from each endpoint.

Now it is necessary to adapt the code in order to transform it into an API respecting the principles of SOLID. For this, you must:

- Modify the `./src/services/PlantService.ts` file, applying the learned concepts;

- Implement in the **Model** layer at least one class responsible for handling the information stored in the `./src/models/database/` directory. This class should implement the `IModel` interface:

> ./src/models/interfaces/IModel.ts

```TypeScript
  export interface IModelReader<T> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | null>
  }

  export interface IModelWriter<T> {
    create(arg: Omit<T, 'id'>): Promise<T>
    update(arg: T): Promise<T>
  }
  export interface IModelDelete {
    removeById(id: string): Promise<boolean>
  }

  export interface IModel<T> extends
    IModelReader<T>,
    IModelWriter<T>,
    IModelDelete {}
```

Add endpoints:

- `GET /plants/:id`: returns a specific plant;
- `PUT /plants/:id`: updates the information of a specific one;
- `DELETE /plants/:id`: deletes a specific plant;

Perform the necessary validations for the new _endpoints_;

### Bonus

- Create a database to persist plant data.
