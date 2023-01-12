class Person {
  private _name: string;
  private _birthDate: Date;
  
  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name() {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }
  
  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000; // 1 year = 31536000000 milliseconds
    return Math.floor(diff / yearMs);
  }

  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('The name must be at least three characters long.');
    }
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('Date of birth cannot be a date in the future.');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('The person cannot be more than 120 years old.');
    }
  }
}

export default Person;
