const jwt = require('jsonwebtoken');
const { formatError } = require('../utils/formatError');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json(formatError('Token not found'));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.data.admin) { 
      return res.status(401).json(formatError('Restricted access'));
    }

    return next();
  } catch (err) {
    return res.status(401).json(formatError(err.message));
  }
};
