const express = require("express");
const router = express.Router();
const User = require("../models/user.models.js");

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/users.controllers.js");
const authenticate = require("../middleware/authenticate.js");

router.use(express.json());
router.get("/", (req, res) => {
  res.send("This is the Home Page of the router!");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
