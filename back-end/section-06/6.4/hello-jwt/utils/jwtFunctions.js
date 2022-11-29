const jwt = require('jsonwebtoken');
const secret = require('../secret');

const createToken = (expiresIn, data) => {
  const jwtConfig = { expiresIn, algorithm: 'HS256' };
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};

module.exports = {
  createToken,
  verifyToken,
};