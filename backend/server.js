// this is used to import .env that makes credentials secure
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const express = require("express");

const app = express();
// this use method is the middleware used for managing paths
app.use((req, _res, next) => {
  console.log(req.path, req.method);
  next();
});
// this will redirect to all the routes in the workoutRoutes
// if i add one more argument before workoutRoutes as string argument it will percive it as root route
app.use("/home", workoutRoutes);
// this is to listen all the requests
app.listen(process.env.PORT, () => {
  console.log("Server Succesfully running on", process.env.PORT);
});
