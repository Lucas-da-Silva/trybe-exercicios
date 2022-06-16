const { sum, myRemove, myFizzBuzz } = require('./sum');

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

describe('fuction to remove element from array', () => {
  it('remove 3 from array and return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('remove 3 from array and not return array with 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('remove 5 from array and return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('function that returns a value depending on the parameter', () => {
  it('number divisible by 3 and 5 returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('number divisible only by 3 returns fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  }); 
  it('number divisible only by 5 returns buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('number not divisible by 3 and 5 returns the number itself', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  it('its not a number', () => {
    expect(myFizzBuzz('hello')).toBe(false);
  });
});
