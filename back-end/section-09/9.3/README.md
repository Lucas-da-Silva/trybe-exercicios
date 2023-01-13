# Polymorphism

## [Exercises - now the practice](./now-the-practice/src/)

- In `src` create a directory called `norms` and a `normsOfUse.ts` file that will store different types of block usage rules.

```TypeScript
const norms = {
   tennis: {
     floor: 'gravel',
     double: true,
   },
   soccer: {
     boot: 'lock',
   },
};

export default norms;
```

- In `src` create a `Block.ts` file that will be implemented during the exercises.

```TypeScript
class Block { }

export default Block;
```

- In `src` create a `Club.ts` file that will be the class responsible for storing the blocks of our system.

```TypeScript
import Block from './Block';

class Club {
  private blocks: Block[] = [];

  public addBlock(block: Block) {
    this.blocks.push(block);
  }

  public fetchBlock<T extends Block>(index: number): T {
    return this.blocks[index] as T;
  }
}

export default Club;
```

### [Exercise 1](./now-the-practice/src/interfaces/IAgenda.ts)
Now let's create an _IAgenda_ interface, which will be used to define the default for the blocks' scheduling. For that:

- Create the _IAgenda_ interface:
  - must be created in the path **src/interfaces/IAgenda.ts**,
  - IAgenda that must receive `a` `generic` parameter of type `T`,
  - IAgenda must have 3 attributes:
    - `string`-type protocol;
    - date of type `Date`;
    - `T`-type rules.

### Exercise 2
Create class Block in `src/Block.ts`, which cannot be instantiated (**abstract class**). It must have an abstract method `reserve` that receives a parameter of type `Date` and returns an attribute of type _IAgenda_.

### Exercise 3
Now create an interface called _IFootball_. It will be used to implement the rules of the class that we will use in exercise 4. The _IFootball_ interface:

- must be created in the path **src/interfaces/ISoccer.ts**,
- must have a cleat key that will be of type string. _spoiler: here will be kept the rules regarding the boots that can be used on the Football block_

### Exercise 4
As you have already created the abstract class _Block_ and the _ISoccer_ interface, now you must create the class BlockSoccer, this class should:

- be created in the path **src/BlockSoccer.ts**,
- extend the abstract class _Block_;
- implement the **reserve** method, the type that this method receives must be the **ISoccer** interface that you created in the previous exercise.
- return the **reserve** method with the following response:

```js
{
   // protocol is the "id" of the reservation, generate randomly
   protocol: 'q39tgorea9',
   date: '2022-11-03T17:53:24.393Z',
   rules: { cleat: 'clove' }
}
```

### Exercise 5
Now in your **src/index.ts** file:

- instantiate the **Club** class,
- instantiate the class **BlockSoccer**,
- add the class you just instantiated (BlockSoccer class), to the club, with the _addBlock_ method
- With your block added to the club, you can now reserve that block on the date you want. Call the _BlockSoccer_ class's _reserve_ method, with the date you want to play a ball with the people you like.
- Print the block reservation result on the console.

### Exercise 6
Now that you know how a new block is created in our club, repeat this process and create a tennis block. This square should:

- be created in the path **src/BlockTenis**

- after being created, it must be instantiated and added to the blocks of our club.

  _tip: don't forget to create an interface before building this class. In the same way as it was done in the_ **BlockSoccer** _class_