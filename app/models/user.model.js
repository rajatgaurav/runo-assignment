const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 0,
      max: 2,
      required: true,
    },
    phonenumber: {
      type: Number,
      min: 10,
      max: 10,
      required: true,
    },
    aadhaarnumber: {
      type: Number,
      min: 12,
      max: 12,
      required: true,
    },
    password: {
      type: String,
      min: "6",
      max: "64",
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
