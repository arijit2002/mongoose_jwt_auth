const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
     type: String,
     required: true,
     min: 2,
     max: 30,
    },
  last_name: { 
    type: String,
    required: true,
    min: 2,
    max: 30,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  token: {
    type: String
  },
});

module.exports = mongoose.model("user", userSchema);
