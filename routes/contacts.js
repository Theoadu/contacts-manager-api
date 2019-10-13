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

router.get("/", (req, res) => {
  res.send("Get All contact here");
});

module.exports = router;
