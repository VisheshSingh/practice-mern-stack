const { default: mongoose } = require('mongoose');
const Workout = require('../models/workoutModel');

// GET ALL ROUTES
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET A SINGLE WRORKOUT
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Error: No such id' });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ msg: 'No such workout' });
  }
  res.status(200).json(workout);
};

// CREATE A WORKOUT
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const emptyFields = [];
  if (!title) {
    emptyFields.push('title');
  }
  if (!reps) {
    emptyFields.push('reps');
  }
  if (!load) {
    emptyFields.push('load');
  }
  if (emptyFields.length > 0) {
    res.status(400).json({ error: 'Please fill in all fields!', emptyFields });
  }
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE A WORKOUT
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Error: No such id' });
  }
  const emptyFields = [];
  if (!req.body.title) {
    emptyFields.push('title');
  }
  if (!req.body.reps) {
    emptyFields.push('reps');
  }
  if (!req.body.load) {
    emptyFields.push('load');
  }
  if (emptyFields.length > 0) {
    res.status(400).json({ error: 'Please fill in all fields!', emptyFields });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    {
      new: true,
    }
  );
  if (!workout) {
    return res.status(400).json({ msg: 'No such workout to update' });
  }
  res.status(200).json(workout);
};

// DELETE A WORKOUT
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Error: No such id' });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ msg: 'No such workout to delete' });
  }
  res.status(200).json({ success: true });
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
};
