const express = require("express");
const {
  gellAllWorkouts,
  getById,
  addOne,
  deleteOne,
} = require("../controllers/workoutController");
const workoutroutes = express.Router();

// get all workout
workoutroutes.get("/", gellAllWorkouts);
// get a specific workout
workoutroutes.get("/:id", getById);
workoutroutes.post("/", addOne);
workoutroutes.patch("/:id", (req, res) => {
  res.json({ message: "updated" });
});
workoutroutes.delete("/:id", deleteOne);
module.exports = workoutroutes;
