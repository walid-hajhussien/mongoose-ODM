const mongoose = require("mongoose");
const schema = require("./Schema");

console.log(schema.UserSchema);

// create user model
const User = mongoose.model("user", schema.UserSchema);

module.exports = {
  User: User
};
