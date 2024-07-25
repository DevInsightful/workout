const mongoose = require("mongoose");
const workout = require("../models/workoutModel.js");

const gellAllWorkouts = (req, res) => {
  res.json({ message: "get all" });
};
const getById = (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json({ message: `get one ${id}` });
};
module.exports = { gellAllWorkouts, getById };
