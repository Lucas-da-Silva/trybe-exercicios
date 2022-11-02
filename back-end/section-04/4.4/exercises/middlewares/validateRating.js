const validateRating = (req, res, next) => {
  const { rating } = req.body.description;
  
  if(rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'The rating field must be between 1 and 5' });
  }

  next();
};

module.exports = validateRating;
