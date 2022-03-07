const mongoose = require("mongoose");

const Class = new mongoose.Schema({
    class: {
        type: Number,
        required: true,
        length: 2,
    },
    Student: [
        {
          type: String,
          required: true,  
        },
    ],
   Subject: [ 
       {
        type: String,
        required: true,
    },
],

})

module.export = mongoose.model("Class",Class);