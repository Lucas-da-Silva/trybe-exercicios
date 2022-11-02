const validateDescription = (req, res, next) => {
  if(!req.body.description) {
    return res.status(400).json({ message: "description field is mandatory" });
  }

  const { description } = req.body;

  if(!description.createdAt) {
    return res.status(400).json({ message: "createdAt field is required" });
  }

  if(!description.rating) {
    return res.status(400).json({ message: "rating field is required" });
  }

  if(!description.difficulty) {
    return res.status(400).json({ message: "difficulty field is required" });
  }
  next();
};

module.exports = validateDescription;
