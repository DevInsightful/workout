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
// add new workout
workoutroutes.post("/", addOne);
// update a workout
workoutroutes.patch("/:id", update);
// delete a workout
workoutroutes.delete("/:id", deleteOne);


module.exports = workoutroutes;
