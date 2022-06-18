const myFizzBuzz = require('../src/myFizzBuzz');

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