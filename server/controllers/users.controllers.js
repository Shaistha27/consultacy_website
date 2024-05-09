const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate.js");
const User = require("../models/user.models.js");
const  asyncHandler  = require("../utils/asyncHandler");
router.use(express.json());

router.get("/", (req, res) => {
  res.send("This is Home Page of router!");
});

const registerUser =   asyncHandler(( async (req, res) => {
    try {
    const { name, email, phone, password, cpassword, isAdmin } = req.body;
    if (!name || !email  || !phone || !password || !cpassword) {
      return res.status(422).json({ error: "please fill all fields" });
    }
   
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        return res.status(422).json({ error: "Email already exists" });
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
  }));

// login
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
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });
    console.log(user)
    // Redirect the user to the appropriate page based on their role
    if (user.isAdmin) {
      // Redirect admin to the admin page
      res.json({ message: "Admin signin successful", isAdmin: true });
      res.redirect("/admin")
    } else {
      // Redirect regular user to the home page
      res.json({ message: "User signin successful", isAdmin: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

const adminDashboard = asyncHandler(async (req, res) => {
  try {
    // You can add your dashboard logic here
    res.send("Welcome to the admin dashboard!");
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});


module.exports = {
    router: router,
    registerUser: registerUser,
    loginUser: loginUser,
    adminDashboard: adminDashboard
  };

