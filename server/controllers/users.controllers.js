const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models.js");
const Admin = require("../models/admin.models.js");
const asyncHandler = require("../utils/asyncHandler");

router.use(express.json());

router.get("/", (req, res) => {
  res.send("This is Home Page of router!");
});

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
      return res.status(422).json({ error: "please fill all fields" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res
        .status(422)
        .json({ error: "User with this Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password doesn't match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        password,
        cpassword,
      });

      const SaveUser = await user.save();
      if (SaveUser) {
        res.status(201).json({ msg: "data entered successfully" });
      } else {
        res.status(500).json({ msg: "Failed to register" });
      }
    }
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill in all the details" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = await user.generateAuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000), // About 30 days
      httpOnly: true,
    });
    console.log("userCont-token", token);
    const response = {
      message:
        user.isAdmin === 1 ? "Admin login successful" : "User login successful",
      token,
      userId: user._id.toString(),
      username: user.name,
    };
    console.log("response", response);
    const status = user.isAdmin === 1 ? 201 : 200;
    return res.status(status).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});
const getUserEnrollmentStatus = async (req, res) => {
  try {
    const userId = req.rootUser._id;
    const user = await User.findById(userId).populate("enrolledCourses");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const enrollmentStatus = user.enrolledCourses.reduce((status, product) => {
      status[product._id] = "Enrolled";
      return status;
    }, {});

    res.status(200).json(enrollmentStatus);
  } catch (error) {
    console.error("Error fetching enrollment status:", error);
    res.status(500).json({ message: "Error fetching enrollment status" });
  }
};
module.exports = {
  router: router,
  registerUser: registerUser,
  loginUser: loginUser,
  getUserEnrollmentStatus,
};
