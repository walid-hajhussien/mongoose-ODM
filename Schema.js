const mongoose = require("mongoose");

// create user Schema
// validation => required ,
// custome => age > 0
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    validate(value) {
      return value > 0;
    }
  }
});

module.exports = {
  UserSchema: UserSchema
};
