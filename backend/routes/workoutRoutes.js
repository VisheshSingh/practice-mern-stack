const express = require('express');
const router = express.Router();
const {
  getAllWorkouts,
  createWorkout,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
} = require('../controllers/workoutController');
const Workout = require('../models/workoutModel');

router.get('/', getAllWorkouts);
router.get('/:id', getSingleWorkout);
router.post('/', createWorkout);
router.patch('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;
