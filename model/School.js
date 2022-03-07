const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minlength: 100,

    },
    Discode: {
        type: Number,
        required: true,
        length: 11,
    },
    AcademyNo: {
        type: Number,
        required: true,
        length: 6,
    },
    Staff: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
        minlength: 8,
    },
})

module.exports = mongoose.model('school',schoolSchema)