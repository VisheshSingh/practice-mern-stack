const express = require('express');
const Workout = require('../models/workoutModel');
const router = express.Router();

// GET ALL WORKOUTS
router.get('/', async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
});

// GET A SINGLE WORKOUT
router.get('/:id', (req, res) => {
  res.status(200).json({ msg: 'GET A SINGLE WORKOUTS' });
});

// ADD A WORKOUT
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;
  const workout = await Workout.create({ title, reps, load });
  res.status(201).json(workout);
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
