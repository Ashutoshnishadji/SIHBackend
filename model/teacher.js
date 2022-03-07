const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contect_number: {
        type: Number,
        required: true,
    },
    UserId: {
        type: String,
        required: true,
        minlength: 5,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
        minlength: 8,
    },
    EMail: {
        type: String,
    },
    Address: {
        type: String,
    },


});

module.exports = mongoose.model('teacher',teacherSchema)