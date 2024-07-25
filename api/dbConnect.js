require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.ConnectionStr)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log("Server running on port: ", process.env.PORT);
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = connection;
