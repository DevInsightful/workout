const express = require("express");
const app = express();
// const helmet = require("helmet");
const cors = require("cors");
const workoutroutes = require("./routes/workoutRoutes");
const connection = require("./dbConnect");
app.use(cors());
app.use(express.json());
// Use Helmet to help set CSP and other security headers
// app.use(
//   helmet({
//     contentSecurityPolicy: false,
//   })
// );

// Example CSP configuration, adjust as necessary for your use case
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", "'unsafe-inline'", "http://localhost:4000"],
//       imgSrc: ["'self'", "data:", "http://localhost:4000"],
//       styleSrc: ["'self'", "'unsafe-inline'"],
//     },
//   })
// );
app.use((req, _res, next) => {
  console.log(req.method + " , " + req.path);
  next();
});
app.use("/workout", workoutroutes);

connection();