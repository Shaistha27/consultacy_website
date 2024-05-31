const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const User = require("../models/user.models");

// Enroll endpoint
router.post("/enroll", authenticate, async (req, res) => {
  // const { userId } = req.rootUser._id;
  console.log("Received userId:", req.rootUser._id.toString());
  console.log("User: ", req.rootUser);
  try {
    const user = await User.findById(req.rootUser._id.toString());
    if (!user) {
      console.log(`User not found for userId: ${req.rootUser._id.toString()}`);
      return res.status(404).send("User not found");
    }

    user.enrolled.push({ enrollments: 1 });
    await user.save();

    console.log(
      `Enrollment updated for userId: ${req.rootUser._id.toString()}`
    );
    res.status(200).send("Enrollment updated");
  } catch (error) {
    console.error("Error updating enrollment:", error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
