const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const validation = (email, password) => {
  if (!email || !password) {
    throw Error("All Fields must be filled");
  }
  const isValid = validator.isEmail(email);
  if (!isValid) {
    throw Error("Email is not valid");
  }
  const strongPassword = validator.isStrongPassword(password);
  if (!strongPassword) {
    throw Error("Password is not strong");
  }
};
userSchema.statics.signup = async function (email, password) {
  validation(email, password);
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

module.exports = mongoose.model("User", userSchema);
