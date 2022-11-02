const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const difficulties = ['Easy', 'Medium', 'Hard'];

  if (!difficulties.includes(difficulty)) {
    return res
      .status(400)
      .json({
        message: "The difficulty field must be 'Easy', 'Medium' or 'Hard'",
      });
  }

  next();
};

module.exports = validateDifficulty;
