const mongoose = require("mongoose");

const Test = new mongoose.Schema({
    name: {
        type: String,
    },  
})

module.export = mongoose.mmodel("Test",Test);
