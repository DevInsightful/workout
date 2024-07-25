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
module.exports = { gellAllWorkouts, getById };
