const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/admin.controllers.js");

// Import any middleware or models needed
const authenticateAdmin = require("../middleware/authenticateAdmin.js");

// Middleware for parsing JSON request bodies
router.use(express.json());

// Home route
router.get("/", (req, res) => {
  res.send(`This is the Home Page of the admin router!`);
});

// Register admin route
router.post("/register", registerAdmin);

// Login admin route
router.post("/login", loginAdmin);

// Dashboard route (example of authenticated route)
router.get("/dashboard", authenticateAdmin, (req, res) => {
  res.send(`This is the Dashboard Page!`);
});

module.exports = router;