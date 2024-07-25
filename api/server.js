const express = require("express");
const app = express();
const cors = require("cors");
const workoutroutes = require("./routes/workoutRoutes");
const connection = require("./dbConnect");
connection();
app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log(req.method + " , " + req.path);
  next();
});
app.use("/workout", workoutroutes);
