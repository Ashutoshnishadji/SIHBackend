const express = require("express");
const { fetchuser } = require("../../midware/fetchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const school = require("../../model/School.js");

router.post(
  "/login",
  [
    body("Discode", "Enter a valid Discode").isLength({ min: 8 }),
    body("password", "Password must be 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { Discode, password } = req.body;
    try {
      let schoolUser = await school.findOne({ Discode });

      if (!schoolUser) {
        return res
          .status(400)
          .json({ success, error: "user with this email already exist" });
      }

      const passwordCompare = await bcrypt.compare(
        password,
        schoolUser.password
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
          schoolUser: {
            Discode: schoolUser.Discode,
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
