const mongoose = require("mongoose");

const Teacher = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  school_code: {
    type: Number,
  },
  userid: {
    type: String,
    minlength: 7,
    required: true,
  },
  password: {
    type: String,
    minlength: 7,
    required: true,
  },
});
