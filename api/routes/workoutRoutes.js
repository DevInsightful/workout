const express = require("express");
const {
  gellAllWorkouts,
  getById,
  addOne,
  deleteOne,
  update,
} = require("../controllers/workoutController");
const workoutroutes = express.Router();

// get all workout
workoutroutes.get("/", gellAllWorkouts);
// get a specific workout
workoutroutes.get("/:id", getById);
workoutroutes.post("/", addOne);
workoutroutes.patch("/:id", update);
workoutroutes.delete("/:id", deleteOne);
module.exports = workoutroutes;
