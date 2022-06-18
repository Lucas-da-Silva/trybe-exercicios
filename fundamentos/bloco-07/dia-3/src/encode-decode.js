function encode(string) {
  let novaString = string;
  novaString = novaString.replace(/a/g, '1');
  novaString = novaString.replace(/e/g, '2');
  novaString = novaString.replace(/i/g, '3');
  novaString = novaString.replace(/o/g, '4');
  novaString = novaString.replace(/u/g, '5');
  return novaString;
}

function decode(string) {
  let novaString = string;
  novaString = novaString.replace(/1/g, 'a');
  novaString = novaString.replace(/2/g, 'e');
  novaString = novaString.replace(/3/g, 'i');
  novaString = novaString.replace(/4/g, 'o');
  novaString = novaString.replace(/5/g, 'u');
  return novaString;
}

module.exports = { encode, decode };