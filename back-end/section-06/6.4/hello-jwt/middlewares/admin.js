const jwt = require('jsonwebtoken');

const getError = (err) => ({ error: { message: err } });

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json(getError('Token not found'));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.data);
    if (!decoded.data.admin) { 
      return res.status(401).json(getError('Restricted access'));
    }

    return next();
  } catch (err) {
    return res.status(401).json(getError(err.message));
  }
};
