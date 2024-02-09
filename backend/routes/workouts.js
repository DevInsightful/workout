const express = require("express");
const router = express.Router();
// To get All the workouts
router.get("/", (req, res) => {
  res.send({ message: "All Workouts" });
});
// To get a workout
router.get(`/:id`, (req, res) => {
  res.send({ message: "Single Workout" });
});

// To delete a workout
router.delete(`/:id`, (req, res) => {
  res.send({ message: "Delete Workout" });
});

// To post a new workout
router.post(`/`, (req, res) => {
  res.send({ message: "POST a new Workout" });
});

// To update a workout
router.patch(`/:id`, (req, res) => {
  res.send({ message: "Update Workout" });
});

module.exports = router;