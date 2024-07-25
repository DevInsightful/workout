const express = require("express");
const workoutroutes = express.Router();

// get all workout
workoutroutes.get("/", (req, res) => {
  res.json({ message: "working" });
});
// get a specific workout
workoutroutes.get("/:id", (req, res) => {
  res.json({ message: "working" });
});
workoutroutes.post("/", (req, res) => {
  res.json({ message: "added" });
});
workoutroutes.patch("/:id", (req, res) => {
  res.json({ message: "updated" });
});
workoutroutes.delete("/:id", (req, res) => {
  res.json({ message: "deleted" });
});
module.exports = workoutroutes;
