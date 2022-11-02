const validatePrice = (req, res, next) => {
  if (!req.body.price) {
    return res.status(400).json({ message: 'The price field is mandatory' });
  }

  const { price } = req.body;

  if (Number(price) < 0) {
    return res
      .status(400)
      .json({
        message:
          'The price field must be a number greater than or equal to zero',
      });
  }
  next();
};

module.exports = validatePrice;
