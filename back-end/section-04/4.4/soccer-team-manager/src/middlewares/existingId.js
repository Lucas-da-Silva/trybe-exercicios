const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.find((team) => team.id === id)) {
    next();
  } else {
    res.status(400).send({ message: 'Id not found' });
  }
};

module.exports = existingId;
