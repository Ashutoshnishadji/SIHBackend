function connetion() {
  const mongoose = require("mongoose");
  const Url = "mongodb://localhost:27017/sih2022";

  mongoose
    .connect(Url)
    .then(() => {
      console.log("connect to mongo db");
    })
    .catch(() => {
      console.log("error");
    });
}


module.exports = connetion;