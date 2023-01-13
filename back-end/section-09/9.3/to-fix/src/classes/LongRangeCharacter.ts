import Character from './Character';

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I can attack from a long range. `);
  }

  specialMove(): void {
    console.log(this._specialMoveName);
  }
}

export default LongRangeCharacter;
