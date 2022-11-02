const generateToken = require('../generateToken');

const validateSignup = (req, res, next) => {
  const requiredFields = ['firstName', 'email', 'password', 'phone'];
  
  if (!requiredFields.every((field) => field in req.body)) {
    return res.status(401).json({ message: 'Fields missing!' });
  }

  const token = generateToken();
  next();
}; 

module.exports = validateSignup;