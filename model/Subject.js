const mongoose = require("mongoose");

const Subject = new mongoose.Schema({

    Sub: {
        type: String,
        required: true,
    },
     
     Subteacher: {
         type: String,
         required: true,
     },
     test: [
         {
             type: String,
         },
     ],
})
module.exports = mongoose.model("subject" , Subject);