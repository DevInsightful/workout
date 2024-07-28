const mongoose = require("mongoose");
const workout = require("../models/workoutModel.js");

const gellAllWorkouts = async (req, res) => {
  try {
    const workouts = await workout.find({}).sort({ createdAt: -1 });
    res.status(200).json({ message: workouts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    res.status(204).json({ message: "Invalid ID" });
    return;
  }

  try {
    const query = await workout.find({ _id: id });
    if (!query) {
      res.status(203).json({ message: "no user record found" });
      return;
    }
    res.status(200).json(query);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const addOne = async (req, res) => {
  try {
    const newWorkout = await workout.create({ ...req.body });
    res.status(201).json({ message: newWorkout });
    return;
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    res.status(204).json({ message: "Invalid ID" });
    return;
  }
  try {
    const deleted = await workout.findByIdAndDelete({ _id: id });
    if (!deleted) {
      res.status(400).json({ message: "No user record" });
      return;
    }
    res.status(200).json({ message: `deleted ${deleted}` });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    res.status(204).json({ message: "Invalid ID" });
    return;
  }

  try {
    const updated = await workout.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!updated) {
      res.status(400).json({ message: "No user record" });
      return;
    }
    res.status(200).json({ message: `updated ${updated}` });
  } catch (err) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { gellAllWorkouts, getById, addOne, deleteOne, update };
