const mongoose = require("mongoose");

// create user Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

module.exports = {
  UserSchema: UserSchema
};
