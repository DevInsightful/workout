const express = require("express");
const workoutroutes = express.Router();

workoutroutes.get("/", (req, res) => {
  res.json({ message: "working" });
});
workoutroutes.post("/", (req, res) => {
  res.json({ message: "working" });
});
workoutroutes.patch("/:id", (req, res) => {
  res.json({ message: "working" });
});
workoutroutes.delete("/:id", (req, res) => {
  res.json({ message: "working" });
});
module.exports = workoutroutes;
