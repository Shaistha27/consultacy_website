const dotenv = require("dotenv");
dotenv.config();
const { upload } = require("./middleware/multer.middleware.js");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
const User = require("./models/user_schema.js");

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Configure CORS to allow requests from all origins
const corsOptions = {
  origin: "http://localhost:3000",
  timeout: 30000, // Increase timeout to 30 seconds
};
app.use(cors(corsOptions));

const PORT = 3001;
require("./db/conn.js");

// ... rest of the code

app.get("/contact", (req, res) => {
  res.cookie("Test", "thapa", {
    domain: "yourdomain.com", // Replace with your domain
    path: "/contact", // Replace with the path you're setting the cookie for
    secure: true, // Set this if your site uses HTTPS
    sameSite: "strict", // You can set 'strict', 'lax', or 'none' based on your requirements
  });
  res.send("This is Contact Page!");
});
app.get("/signin", (req, res) => {
  res.send("This is Login Page!");
});
app.get("/signup", (req, res) => {
  res.send("This is Registration Page!");
});

app.get("/", (req, res)=>{
  res.send("Hi");
})

app.post("/upload-files", upload.single("file"), async (req, res) => {
  try {
    // Handle the uploaded file here
    console.log(req.file);
    res.send("File uploaded successfully");
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", async(req, res)=> {
  res.send("Success !!!!!");
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
