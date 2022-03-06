const express = require("express");
const connection = require("./functions/mongoconnection");
const UserRouter = require("./Routes/UserRouter");
const app = express();
connection();
app.use("/user" , UserRouter);

app.listen(8000 , ()=>{
    console.log('http://localhost:8000');
})