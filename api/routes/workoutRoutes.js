const express = require("express");
const {
  gellAllWorkouts,
  getById,
  addWorkout,
} = require("../controllers/workoutController");
const workoutroutes = express.Router();

// get all workout
workoutroutes.get("/", gellAllWorkouts);
// get a specific workout
workoutroutes.get("/:id", getById);
workoutroutes.post("/", addWorkout);
workoutroutes.patch("/:id", (req, res) => {
  res.json({ message: "updated" });
});
workoutroutes.delete("/:id", (req, res) => {
  res.json({ message: "deleted" });
});
module.exports = workoutroutes;
