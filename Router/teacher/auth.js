const express = require("express");
const { fetchuser } = require("../../midware/fetchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const student = require("../../model/Student.js");
const teacher = require("../../model/teacher.js");

router.post("/new" , [
    body("Name","Name is incorrect").isEmpty(),
    body("ContactNo", "Correct your contact no").isLength(10),
    body("UserId","UserId Must be 5 digit").isLength(5),
    body("Password","Password is soo weak").isLength(8),
]), async (req, res) =>{

    const err= validationResult(req);

    if(err.isEmpty() == false){
        return res.send({ error: err.array()})
    }
}


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
    const { userId, password } = req.body;
    try {
      let teacherUser = await teacher.findOne({ userId });

      if (!teacherUser) {
        return res
          .status(400)
          .json({ success, error: "user with this email already exist" });
      }

      const passwordCompare = await bcrypt.compare(
        password,
        teacherUser.password
      );
      if (!passwordCompare) {
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credentials",
          });
      } else {
        const data = {
          teacherUser: {
            userId: teacherUser.userId,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authToken });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);


module.exports = router;