const { encode, decode } = require('../src/encode-decode');

describe('test for encode and decode', () => {
  // #1
  it('test if encode and decode are a function', () => {
    expect(typeof encode && typeof decode).toBe('function');
  });
  // #2
  it('encode function converted a, e, i, o, u to 1, 2, 3, 4, 5', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toBe('1', '2', '3', '4', '5');
  });
  // #3
  it('decode function converted 1, 2, 3, 4, 5 to a, e, i, o, u', () => {
    expect(decode('1', '2', '3', '4', '5')).toBe('a', 'e', 'i', 'o', 'u');
  });
  //#4
  it('encode function does not convert other words', () => {
    expect(encode('l', 't', 'g', 'h', 'f')).not.toBe('1', '2', '3', '4', '5');
  });
  it('decode function does not convert other words', () => {
    expect(decode('1', '2', '3', '4', '5')).not.toBe('l', 't', 'g', 'h', 'f');
  });
  // #5
  it('string returned by the encode have the same number of characters as the string passed', () => {
    expect(encode('string').length).toEqual('string'.length);
  });
  it('string returned by the decode have the same number of characters as the string passed', () => {
    expect(decode('string').length).toEqual('string'.length);
  });
});
