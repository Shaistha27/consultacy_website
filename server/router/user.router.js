// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const authenticate = require("../middleware/authenticate.js");
// router.use(express.json());
// // require("../db/conn.js"); this line is throwing an error
// const User = require("../models/user_schema.js");
// router.get("/", (req, res) => {
//   res.send("This is Home Page of router!");
// });

// // console.log("Request Body:", req.body);
// // res.json({ message: "Received your request" });
// // res.json({ message: req.body });

// // using promises
// // router.post("/register", (req, res) => {
// //   const { name, email, work, phone, password, cpassword } = req.body;
// //   if (!name || !email || !work || !phone || !password || !cpassword) {
// //     return res.status(422).json({ error: "please fill all fields" });
// //   }
// // User.findOne({ email: email })
// //   .then((userExist) => {
// //     if (userExist) {
// //       return res.status(422).json({ error: "Email already exists" });
// //     } else {
// //       const user = new User({
// //         name,
// //         email,
// //         phone,
// //         work,
// //         password,
// //         cpassword,
// //       });
// //       user
// //         .save()
// //         .then(() => {
// //           res.status(201).json({ msg: "data entered successfully" });
// //         })
// //         .catch((err) => {
// //           res.status(500).json({ msg: "error occured" });
// //         });
// //     }
// //   })
// //   .catch((err) => {
// //     res.status(500).json({ msg: "server error" });
// //   });
// // using async await
// router.post("/register", async (req, res) => {
//   const { name, email, work, phone, password, cpassword } = req.body;
//   if (!name || !email || !work || !phone || !password || !cpassword) {
//     return res.status(422).json({ error: "please fill all fields" });
//   }
//   try {
//     const userExist = await User.findOne({ email: email });
//     if (userExist) {
//       return res.status(422).json({ error: "Email already exists" });
//     } else if (password != cpassword) {
//       return res.status(422).json({ error: "Email already exists" });
//     } else {
//       const user = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });

//       const userRegister = await user.save();
//       if (userRegister) {
//         res.status(201).json({ msg: "data entered successfully" });
//       } else {
//         res.status(500).json({ msg: "Failed to register" });
//       }
//     }
//   } catch (err) {
//     res.status(500).json({ msg: "server error" });
//   }
// });
// // login route
// router.post("/signin", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ msg: "please fill the details" });
//     }
//     const userLogin = await User.findOne({ email: email });
//     console.log(userLogin);

//     if (userLogin) {
//       const isMatch = await bcrypt.compare(password, userLogin.password);

//       const token = await userLogin.generateAuthToken();
//       console.log(token);

//       res.cookie("jwtoken", token, {
//         expires: new Date(Date.now() + 25892000000),
//         httpOnly: true,
//       });
//       // console.log("Input password:", password);
//       // console.log("Stored hashed password:", userLogin.password);
//       // console.log("isMatch:", isMatch);
//       if (isMatch) {
//         res.json({ message: "User signin successful" });
//       } else {
//         res.status(400).json({ error: "Invalid Credentials" });
//       }
//     } else {
//       return res.status(400).json({ msg: "Invalid Credentials" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// // dynamic about us page
// router.get("/about", authenticate, (req, res) => {
//   console.log("About");
//   res.send("This is About Page!");
// });
// module.exports = router;
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/users.controllers.js");

// Import any middleware or models needed
const authenticate = require("../middleware/authenticate.js");

// Middleware for parsing JSON request bodies
router.use(express.json());

// Home route
router.get("/", (req, res) => {
  res.send("This is the Home Page of the router!");
});

// Register user route
router.post("/register", registerUser);

// Login user route
router.post("/login", loginUser);

// About route (example of authenticated route)
router.get("/about", authenticate, (req, res) => {
  res.send("This is the About Page!");
});

module.exports = router;
