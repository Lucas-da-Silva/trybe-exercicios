const myRemove = require('../src/myRemove')

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