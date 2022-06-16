const { searchEmployee } = require('./exercicio-bonus');

describe('test for function searchEmployee', () => {
  it('Is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('searching for a person by id and information', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it('searching for a person with information that does not exist', () => {
    expect(searchEmployee('5569-4', 'job')).toBe('Informação indisponível');
  });
  it('searching for a person with id that does not exist', () => {
    expect(searchEmployee('1234-5', 'lastName')).toBe('ID não identificada');
  });
});
