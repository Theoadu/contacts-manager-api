const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

// @Route       POST api/contacts
// @Desc        Registers new contact
// @Access      Private
router.post("/", (req, res) => {
  res.send("Register a user");
});

router.put("/:id", (req, res) => {
  res.send("Update contacts here");
});

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: "-1"
    });
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
