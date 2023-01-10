class Student {
  private _registration: string;
  private _name: string;
  private _examNotes: number[];
  private _workNotes: number[];

  constructor(registration: string, name: string) {
    this._registration = registration;
    this._name = name;
    this._examNotes = [];
    this._workNotes = [];
  }

  get registration() {
    return this._registration;
  }

  get name() {
    return this._name;
  }

  get examNotes() {
    return this._examNotes;
  }

  get workNotes() {
    return this._workNotes;
  }

  set examNotes(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A student can only have 4 exam scores.');
    } else {
      this._examNotes = value;
    }
  }

  set workNotes(value: number[]) {
    if (value.length !== 2) {
      throw new Error('The student person can only have 2 grades of work.');
    } else {
      this._workNotes = value;
    }
  }

  total(): number {
    const sumNotes = [...this._examNotes, ...this._workNotes].reduce(
      (total, note) => total + note,
      0
    );
    return sumNotes;
  }

  average(): number {
    const total = this.total();
    const divinder = this._examNotes.length + this._workNotes.length;
    return Math.round(total / divinder);
  }
}

const student1 = new Student('202001011', 'Someone from Somewhere');

student1.examNotes = [5, 3, 8, 10];
student1.workNotes = [7, 8];

console.log(student1.total());
console.log(student1.average());
