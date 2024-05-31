const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

router.get("/me", authenticate, (req, res) => {
  try {
    res.json({ user: req.rootUser });
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch user data" });
  }
});

module.exports = router;
