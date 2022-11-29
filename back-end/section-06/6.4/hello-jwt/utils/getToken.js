const jwt = require('jsonwebtoken');

module.exports = (expiresIn, data) => {
  const jwtConfig = { expiresIn, algorithm: 'HS256' };
  const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);
  return token;
};