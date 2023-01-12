import Person from './Person';

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment() {
    return this._enrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  get assignmentsGrades() {
    return this._assignmentsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A student can only have 4 exam scores.');
    } else {
      this._examsGrades = value;
    }
  }

  set assignmentsGrades(value: number[]) {
    if (value.length !== 2) {
      throw new Error('The student person can only have 2 grades of work.');
    } else {
      this._assignmentsGrades = value;
    }
  }

  sumGrades(): number {
    const sumNotes = [...this._examsGrades, ...this._assignmentsGrades].reduce(
      (total, note) => total + note,
      0
    );
    return sumNotes;
  }

  sumAverageGrade(): number {
    const total = this.sumGrades();
    const divinder = this._examsGrades.length + this._assignmentsGrades.length;
    return Math.round(total / divinder);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );
    return `STU${randomStr}`;
  }
}

export default Student;
