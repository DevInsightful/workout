const mongoose = require("mongoose");
const workout = require("../models/workoutModel.js");

const gellAllWorkouts = async (req, res) => {
  const workouts = await workout.find({});
  console.log(workouts);
  res.json({ message: workouts });
};
const getById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json({ message: `get one ${id}` });
};

const addWorkout = async (req, res) => {
  const { reps, title, load } = req.body;
  try {
    const newWorkout = await workout.create({ title, reps, load });
    res.status(201).json({ message: newWorkout });
  } catch (error) {
    res.status(400).json({ message: error.message });
    return null;
  }
};
module.exports = { gellAllWorkouts, getById, addWorkout };
