const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Student = require("../../model/Student");

router.post("/new" ,  [
   body("Name" , "Min length 3").isLength({min: 3}),
   body("FName" , "Min length 3").isLength({min: 3}),
   body("MName" , "Min length 3").isLength({min: 3}),
   body("Password" , "Password is so week").isLength({ min: 8 }),
   body("ContactNo" , "Contact number must be 10").isLength( 10 ),
   body("AdmissionNo").isLength(4),
  ] , async (req, res) =>{

const err = validationResult(req);

if(!err.isEmpty() ){
   return res.send({data: req.body, errors: err.array()});
}
try {
  var givendata = req.body;
//   const newstudent = new Student({
//       Name: givendata.Name,
//       FName: givendata.FName,
//       MName: givendata.MName,
//       DOB: givendata.DOB,
//       Password: givendata.Password,
//       AdmissonDate: givendata.AdmissonDate,
//       AdmissonNo: givendata.AdmissonNo,   
//   })
// const response = await newstudent.save();
return res.send(givendata);
} catch (error) {
    return res.send("internel Server Error");
}
  } 
  )



  
// 

router.post(
  "/login",
  [
    body("AdmitionNo", "Enter a valid AdmitionNo").isLength({ min: 8 }),
    body("password", "Password must be 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const {AdmitionNo, password } = req.body;
    try {
      
    let studentUser = await student.findOne({ AdmitionNo });
    if ( !studentUser) {
        return res
            .status(400)
            .json({success, error: "user with this email already exist" });
    } 
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

module.exports = router;
