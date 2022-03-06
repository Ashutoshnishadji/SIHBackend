const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/SIH"

module.exports.connectDatabase = ()=>{
    mongoose
    .connect(mongoUrl)
    .then((con)=>{
        console.log(`Database Connected : ${con.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}