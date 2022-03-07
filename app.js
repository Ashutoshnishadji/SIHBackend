const express = require("express");
const {connectDatabase} = require('./db')

connectDatabase()

const app = express();
const port = 5000;
app.use(express.json());

app.use('/teacher', require('./Router/teacher/auth.js'))
app.use('/student', require('./Router/student/auth.js'))
app.use('/school', require('./Router/school/auth.js'))

app.get('/',(req,res)=>{
  res.send('hello buddy')
})

app.listen(port, () => {
  console.log("connected to backend express");
});
