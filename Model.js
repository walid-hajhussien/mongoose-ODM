const mongoose = require("mongoose");
const schema = require("./Schema");

// create user model
const User = mongoose.model("user", schema.UserSchema);

module.exports = {
  User: User
};
