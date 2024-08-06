const mongoose = require("mongoose");
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
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
}; 

module.exports = mongoose.model("User", userSchema);
