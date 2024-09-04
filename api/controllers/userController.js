require("dotenv");
const userModel = require("../models/userModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.Secret, { expiresIn: "1d" });
};
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.signin(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const allusers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json({ users: users });
  } catch (err) {
    res.json({ err: err.message });
  }
};

module.exports = { signupUser, loginUser, allusers };
