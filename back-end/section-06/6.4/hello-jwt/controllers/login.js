require('dotenv');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const validateUserPassword = (user, password) =>
  user && user.length > 4 && password && password.length > 4;

const validateAdmin = (user, password) =>
  user === 'admin' && password === 's3nh4S3gur4???';

module.exports = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!validateUserPassword(username, password)) {
      return res
        .status(401)
        .json({ message: 'Username and password required to login' });
    }
    
    const data = { username, admin: validateAdmin(username, password) };
    const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);

    return res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Internal error', error: err.message });
  }
};
