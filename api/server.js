require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("succesfully running at", process.env.PORT);
});
app.get("/", (req, res) => {
  res.json({ message: "working" });
});
