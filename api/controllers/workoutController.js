const mongoose = require("mongoose");
const workout = require("../models/workoutModel.js");

const gellAllWorkouts = (req, res) => {
  res.json({ message: "get all" });
};
const getById = (req, res) => {
  res.json({ message: "get one" });
};
module.exports = { gellAllWorkouts, getById };
