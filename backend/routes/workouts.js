const express = require("express");
const router = express.Router();
// A get request to / route
router.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});
router.get("/workout", (req, res) => {
  res.send({ message: "World!" });
});

module.exports = router;