const express = require("express");
const router = express.Router();
const User = require("../models/user.models.js");
const adminMiddleware = require("../middleware/adminAuthenticate.js");
const { registerUser, loginUser } = require("../controllers/users.controllers.js");
const authenticate = require("../middleware/authenticate.js");
const logoutUser = require("../controllers/users.controllers.js").logoutUser;

// Middleware for parsing JSON request bodies
router.use(express.json());

// Home route
router.get("/", (req, res) => {
  res.send(`This is the Home Page of the router!`);
});

// Admin dashboard route
// router.get("/admin", adminMiddleware, async (req, res) => {
//   try {
//     // Your admin dashboard code here
//     res.send("Welcome to the admin dashboard!");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

// Register user route
router.post("/register", registerUser);

// Login user route
router.post("/login", loginUser);



// About route (example of authenticated route)
// router.get("/about", authenticate, (req, res) => {
//   res.send(`This is the About Page!`);
// });

module.exports = router;