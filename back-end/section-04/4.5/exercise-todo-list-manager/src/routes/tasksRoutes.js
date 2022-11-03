const express = require('express');
const { insert, update, remove, findAll, findById } = require('../db/tasksDB');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const [result] = await insert(req.body);
    res.status(201).json({ message: `Added task with id ${result.insertId}` });
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await update(id, req.body);
    
    res.status(200).json({ message: `Task with id ${id} changed` });
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await remove(id);
    console.log(result);
    res.status(200).json({ message: 'Taks removed' });
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/', async (req, res) => {
  try {
    const [result] = await findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

module.exports = router;
