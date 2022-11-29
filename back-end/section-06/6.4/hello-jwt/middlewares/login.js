module.exports = (req, res, next) => {
  const { username, password } = req.body;
  if (username && username.length > 4 && password && password.length > 4) {
    return next();
  }
  return res
    .status(401)
    .json({ message: 'Username and password required to login' });
};
