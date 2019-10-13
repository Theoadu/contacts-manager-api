const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const router = express.Router();

// @Route       POST api/users
// @Desc        Registers new user
// @Access      Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please include a password with 6 or more characters"
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      user = new User({
        name,
        email,
        password
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.json({ msg: "Saved" });
    } catch (errors) {
      // ToDo implment file/email/SMS logging strategy here
      console.error(errors.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

// router.post("/", (req, res) => res.json({ status: "Passed" }));
router.get("/", (req, res) => {
  res.send("Get all users");
});

module.exports = router;
