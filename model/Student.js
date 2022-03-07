const mongoose = require("mongoose");
const {Schema} = mongoose

const studentSchema = new Schema({
 
    Name: {
        type: String,
        required: true,
        },
    MName: {
        type: String,
        required: true,
    },
    FName: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    MobileNo: {
        type: Number,
        length: 10,
    },
    AdmissionDate: {
        type: Date,
        // required: true,
    },
    AdmissionNo: {
        type: Number,
        // required: true,
    },
    Category: {
        type: String,
        // required: true,
    },
    Password: {
        type: String,
        required: true,
    },

})


module.exports = mongoose.model('student',studentSchema);