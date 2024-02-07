// this is used to import .env that makes credentials secure
require("dotenv").config();

const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(process.env.PORT, () => {
  console.log("Server Succesfully running on", process.env.PORT);
});
