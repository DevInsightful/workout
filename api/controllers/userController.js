const User = require("../models/userModel");
const signupUser = async (req, res) => {
  res.json({ message: "SignUp" });
};
const loginUser = async (req, res) => {
  res.json({ message: "Login" });
};

module.exports = { signupUser, loginUser };
