const validateName = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ message: 'The name field is mandatory' });
  }
  
  const { name } = req.body;
  
  if (name.length < 5) {
    return res
      .status(400)
      .json({ message: 'The name field must be at least 4 characters long' });
  }
  next();
};

module.exports = validateName;
