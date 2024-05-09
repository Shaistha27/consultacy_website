const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");

// Create admin account route
const registerAdmin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).send({ error: "Admin account already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newAdmin = new Admin({ email, password: hashedPassword });
    const savedAdmin = await newAdmin.save();
    if (savedAdmin) {
      res.status(201).send({ message: "Admin account created successfully" });
    } else {
      res.status(500).json({ msg: "Failed to register" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Admin login route
const loginAdmin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill in all the details" });
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).send({ error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).send({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: admin._id }, process.env.SECRET_KEY);

    // Set JWT token in cookie
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    // Redirect to admin dashboard
    res.redirect("/admin-dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Admin dashboard route


module.exports = { registerAdmin, loginAdmin };