const sum = require('../src/sum');

describe('function sum two values', () => {
  it('sum of 4 and 5 is equal to 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('sum of 0 returns 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('sum of number and string returns Error', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('sum of number and string returns Error message parameters must be numbers', () => {
    expect(() => sum(4, '5').toThrowError('parameters must be numbers'));
  });
});