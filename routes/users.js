const express = require("express");
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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.json({ status: "Passed" });
  }
);

// router.post("/", (req, res) => res.json({ status: "Passed" }));
router.get("/", (req, res) => {
  res.send("Get all users");
});

module.exports = router;
