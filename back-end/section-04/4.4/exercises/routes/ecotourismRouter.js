const express = require('express');
const {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  validateSignup,
} = require('../middlewares');

const router = express.Router();

router.post(
  '/activities',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (req, res) => {
    res.status(201).json({ message: 'Activity successfully registered!' });
  }
);

router.post('/signup', validateSignup, (req, res) => {
  res.status(201).json({ message: 'User successfully registered!' });
});

module.exports = router;
