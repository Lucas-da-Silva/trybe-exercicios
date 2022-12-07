# Introduction to TypeScript

> In the [exercises](./exercises/) directory are the exercises developed during the class, they were exercises done in a guided way.

## Exercises - now the practice

### [Exercise 1](./my-ts-scripts/characters.ts)

We have a `characters` array that groups player data in an MMORPG (“Mass Multiplayer Online Role-playing Game”) used to keep track of a guild (group of players) in tracking the evolution of the group. This data was added without paying attention to its correct typing, which could cause a bug in the future. Correctly type the array through the `Character` type and the function used to print the basic information of all players.

<details>
  <summary>characters file code before refactoring</summary>

```TypeScript
type Character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```

</details>

---

### [Exercise 2](./my-ts-scripts/length.ts)

Create a script to convert length measurement units:

1. This script should be called `length.ts`;

2. It should have a function called `convert` that takes as a parameter:
   - value - number
   - base unit - string
   - unit for conversion - string

**Conversion table:**

| Name       | Symbol | Value  |
| ---------- | ------ | ------ |
| Kilometer  | km     | 1000m  |
| Hectometer | hm     | 100m   |
| Decameter  | dam    | 10m    |
| Meter      | m      | 1m     |
| Decimeter  | dm     | 0.1m   |
| Centimeter | cm     | 0.01m  |
| Millimeter | mm     | 0.001m |

---

### [Exercise 3](./my-ts-scripts/mass.ts)

Create a script to convert units of measurement to mass:

1. This script should be called `mass.ts`;
2. It should have a function called `convert` that takes as a parameter:
   - value - number
   - base unit - string
   - unit for conversion - string

**Conversion table:**

| Name      | Symbol | Value  |
| --------- | ------ | ------ |
| Kilogram  | kg     | 1000g  |
| Hectogram | hg     | 100g   |
| Decagram  | dag    | 10g    |
| Gram      | g      | 1g     |
| Decigram  | dg     | 0.1g   |
| Centigram | cg     | 0.01g  |
| Milligram | mg     | 0.001g |

---

### [Exercise 4](./my-ts-scripts/capacity.ts)

Create a script to convert capacity measurement units:

1. This script should be called `capacity.ts`;
2. It should have a function called `convert` that takes as a parameter:
   - value - number
   - base unit - string
   - unit for conversion - string

**Conversion table:**

| Name       | Symbol | Value  |
| ---------- | ------ | ------ |
| Kiloliter  | kl     | 1000l  |
| Hectoliter | hl     | 100l   |
| Decaliter  | dal    | 10l    |
| Liter      | l      | 1l     |
| Deciliter  | dl     | 0.1l   |
| Centiliter | cl     | 0.01l  |
| Milliliter | ml     | 0.001l |

---

### [Exercise 5](./my-ts-scripts/area.ts)

Create a script to convert area measurement units:

1. This script should be called `area.ts`;
2. It should have a function called `convert` that takes as a parameter:
   - value - number
   - base unit - string
   - unit for conversion - string

**Note**: pay attention to the conversion of square meters, which must be performed in 100 to 100.

**Conversion table:**

| Name              | Symbol | Value   |
| ----------------- | ------ | ------- |
| Square kilometer  | km²    | 10⁶ m²  |
| Square hectometer | hm²    | 10⁴ m²  |
| Square decameter  | dam²   | 10² m²  |
| Square meter      | m²     | 1m²     |
| Square decimeter  | dm²    | 10⁻² m² |
| Square centimeter | cm²    | 10⁻⁴ m² |
| Square millimeter | mm²    | 10⁻⁶ m² |

---

### [Exercise 6](./my-ts-scripts/volume.ts)

Create a script to convert volume measurement units:

1. This script should be called `volume.ts`;
2. It should have a function called `convert` that takes as a parameter:
   - value - number
   - base unit - string
   - unit for conversion - string

**Note**: pay attention to the conversion of square meters, which must be performed in 1000 to 1000.

**Conversion table:**

| Name             | Symbol | Value   |
| ---------------- | ------ | ------- |
| Cubic kilometer  | km³    | 10⁹ m³  |
| Cubic hectometer | hm³    | 10⁶ m³  |
| Cubic decameter  | dam³   | 10³ m³  |
| Cubic meter      | m³     | 1m³     |
| Cubic decimeter  | dm³    | 10⁻³ m³ |
| Cubic centimeter | cm³    | 10⁻⁶ m³ |
| Cubic millimeter | mm³    | 10⁻⁹ m³ |

---

### Exercise 7
Let's make our measurement unit scripts more interactive! Let's add input from who uses the script. For this, use the `readline-sync` package, [documentation](https://www.npmjs.com/package/readline-sync#utility_methods).

In each script, create a function called `exec` that:

1. Capture user inputs via terminal;
2. Calls the conversion function passing the user person entries as a parameter;
3. Displays a message with the result. Ex: "1km equals 1000m.";
4. Don't forget to call the exec function at the end of the script. `exec();`“

--- 

### [Exercise 8](./my-ts-scripts/index.ts)
Create an `index.ts` file that asks which conversion the user wants to perform, and calls the corresponding script:

1. The script must be triggered via the `npm start` command in `package.json`;
2. Use `readline-sync` to input data;
3. When run, the script should display a numbered list of available scripts;
4. You can use `require` to run the script in question.
