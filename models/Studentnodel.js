const mongoose = require("mongoose");

// The schema for storing user data
// ************************************************************************************************
const Student = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 3,
  },
  fname: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 3,
  },
  mname: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 3,
  },
  Cat: {
    type: String,
    required: true,
  },
  Dob: {
    type: Date,
    required: true,
  },
  profileImageUrl: {
    type: String,
    //   required: true,
    default: "SOME GENERIC IMAGE URL",
  },
  AdmissionNo: {
    type: Number,
    length: 4,
  },
  AdmissionDate: {
    type: Date,
  },
  Adress: {
      type: String,
      maxlength: 100,
  },
  contect_number: {
      type: Number,
      length: 10
  },
  school_code: {
type: Number,
  },
  an: {
type: Number
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Student", Student);
// ************************************************************************************************
