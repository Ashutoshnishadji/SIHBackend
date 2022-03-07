const express = require("express");
const { fetchuser } = require("../midware/fetchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const student = require("../model/Student.js");
const teacher = require("../model/teacher.js");

router.post(
  "/login",
  [
    body("userId", "Enter a valid userId").isLength({ min: 8 }),
    body("password", "Password must be 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const {AdmitionNo, userId, password } = req.body;
    try {
      let teacherUser = await teacher.findOne({ userId });
      let studentUser = await student.findOne({ AdmitionNo });
      if (!teacherUser || !studentUser) {
            return res
                .status(400)
                .json({success, error: "user with this email already exist" });
      }  
      if (teacher) {
        const passwordCompare = await bcrypt.compare(password, teacherUser.password);
            if (!passwordCompare) {
  
                return res
                    .status(400)
                    .json({success, error: "Please try to login with correct credentials" });
            }else{
                const data = {
                    teacherUser: {
                        userId: teacherUser.userId,
                    },
                };
                const authToken = jwt.sign(data, JWT_SECRET);
                success= true
                res.json({success, authToken });
            }
      }
      else if (student) {
        const passwordCompare = await bcrypt.compare(password, studentUser.password);
        if (!passwordCompare) {

            return res
                .status(400)
                .json({success, error: "Please try to login with correct credentials" });
        }else{
            const data = {
                studentUser: {
                    AdmitionNo: studentUser.AdmitionNo,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);
            success= true
            res.json({success, authToken });
        }
      }
      else{
        return res
                .status(400)
                .json({success, error: "user with this email already exist" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

// router.post("/fetchdata" , fetchuser ,()=>{
// const userId =
// })

// router.post("/new" ,
// [
// body("name").isEmpty(),
// body("userid").isLength({min: 5}),
// body("Password").islength({min: 8},
// body("contactNo").islength({min: 10})
// ] , (req,res)=>{

// })
//
// router.post('/newTeacher',())
// router.post('/newStudent',())

router.post(
  "/new",
  [
    body("Name").isEmpty(),
    body("userid").isLength({ min: 5 }),
    body("Password").isLength({ min: 8 }),
    body("contactNo").isLength({ min: 10 }),
  ],
  async (req, res) => {

    const succes = false;
    const err = validationResult(req);
    if(!err.isEmpty()){
        res.status(400).send({succes , errors: err.array()});
    }

    var data = {};
    var givendata = req.body;
    const newstudent = new student({
      Name: "Aashutosh Nishad",
      FName: "Ramji Nishad",
      MName: "Gaindi NIshad",
      DOB: "02/05/2003",
      AdmitionNo: "1520",
      AdmitionDate: "02/05/2003",
    });

    const response = await newstudent.save();

    res.send(response);
  }
);

module.exports = router;
