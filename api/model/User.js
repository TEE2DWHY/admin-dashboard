const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  lastName: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  password: {
    type: String,
    required: [true, "Field cannot be empty"],
    minlength: [8, "Password cannot be less than 8"],
  },
});

module.exports = mongoose.model("User", userSchema);
