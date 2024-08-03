require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const workoutroutes = require("./routes/workoutRoutes");
const connection = () => {
  mongoose
    .connect(process.env.ConnectionStr)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(
          "connected to db Server running on port: ",
          process.env.PORT
        );
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

connection();
app.get("/", (req, res) => {
  res.json({ message: "workking" });
});
app.use((req, _res, next) => {
  console.log(req.method + " , " + req.path);
  next();
});
app.use("/workout", workoutroutes);
