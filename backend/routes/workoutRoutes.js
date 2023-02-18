const express = require('express');
const router = express.Router();

// GET ALL WORKOUTS
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'GET ALL WORKOUTS' });
});

// GET A SINGLE WORKOUT
router.get('/:id', (req, res) => {
  res.status(200).json({ msg: 'GET A SINGLE WORKOUTS' });
});

// ADD A WORKOUT
router.post('/', (req, res) => {
  res.status(201).json({ msg: 'ADD A WORKOUT' });
});

// UPDATE A WORKOUT
router.patch('/:id', (req, res) => {
  res.status(200).json({ msg: 'UPDATE A WORKOUT' });
});

// DELETE A WORKOUT
router.delete('/:id', (req, res) => {
  res.status(200).json({ msg: 'DELETE A WORKOUT' });
});

module.exports = router;
