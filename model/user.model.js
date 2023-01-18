const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  login: String,
  password: String,
  avatar: String,
  aboutme: String,
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
