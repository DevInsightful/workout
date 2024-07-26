const mongoose = require("mongoose");
const workout = require("../models/workoutModel.js");

const gellAllWorkouts = async (req, res) => {
  const workouts = await workout.find({});
  console.log(workouts);
  res.json({ message: workouts });
};
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const query = await workout.find({ _id: id });
    res.json(query);
  } catch (error) {
    console.log(error.message);
  }
};

const addOne = async (req, res) => {
  const { reps, title, load } = req.body;
  try {
    const newWorkout = await workout.create({ title, reps, load });
    res.status(201).json({ message: newWorkout });
  } catch (error) {
    res.status(400).json({ message: error.message });
    return null;
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await workout.findByIdAndDelete({ _id: id });
    res.json({ message: `deleted ${deleted}` });
  } catch (error) {
    res.json({ error: error.message });
  }
};
module.exports = { gellAllWorkouts, getById, addOne, deleteOne };
