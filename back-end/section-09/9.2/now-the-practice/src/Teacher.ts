import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    
    this._subject = subject;
    this._registration = this.generateRegistration();
    this._salary = salary;
    this._admissionDate = new Date();
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('Salary cannot be negative');
    }
    this._salary = value;
  }

  get registration() {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) {
      throw new Error('The registration mustb be at least 16 characters long');
    }
    this._registration = value;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('Admission date cannot be in the future');
    }
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `PRF${randomStr}`;
  }
}

export default Teacher;
