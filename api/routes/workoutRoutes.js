const express = require("express");
const router = express.Router();

router.get("/workout", (req, res) => {
  res.json({ message: "working" });
});

module.exports = router;
