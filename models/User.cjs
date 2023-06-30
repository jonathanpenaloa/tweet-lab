/* eslint-disable no-undef */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, require },
    password: { type: String, require },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;