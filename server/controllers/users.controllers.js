const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate.js");
const User = require("../models/user_schema.js");
const  asyncHandler  = require("../utils/asyncHandler");
router.use(express.json());

router.get("/", (req, res) => {
  res.send("This is Home Page of router!");
});

const registerUser =   asyncHandler(( async (req, res) => {
    try {
    const { name, email, work, phone, password, cpassword } = req.body;
    if (!name || !email || !work || !phone || !password || !cpassword) {
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
          work,
          password,
          cpassword,
        });
  
        const userRegister = await user.save();
        if (userRegister) {
          res.status(201).json({ msg: "data entered successfully" });
        } else {
          res.status(500).json({ msg: "Failed to register" });
        }
      }
    } catch (err) {
      res.status(500).json({ msg: "server error" });
    }
  }));
// login route
const loginUser = asyncHandler(( async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ msg: "please fill the details" });
      }
      const userLogin = await User.findOne({ email: email });
      console.log(userLogin);
  
      if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);
  
        const token = await userLogin.generateAuthToken();
        console.log(token);
  
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        if (isMatch) {
          res.json({ message: "User signin successful" });
        } else {
          res.status(400).json({ error: "Invalid Credentials" });
        }
      } else {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
    } catch (err) {
      console.log(err);
    }
  }));

// dynamic about us page
router.get("/about", authenticate, (req, res) => {
  console.log("About");
  res.send("This is About Page!");
});
module.exports = {
    router: router,
    registerUser: registerUser,
    loginUser: loginUser
  };

