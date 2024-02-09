// this is used to import .env that makes credentials secure
require("dotenv").config();

const express = require("express");

const app = express();
// this use method is the middleware used for managing paths
app.use((req, _res, next) => {
  console.log(req.path, req.method);
  next();
});
// A get request to / route
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});
// this is to listen all the requests
app.listen(process.env.PORT, () => {
  console.log("Server Succesfully running on", process.env.PORT);
});
