const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const { upload } = require("./middleware/multer.middleware.js");

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./router/user.router.js");
const connect = require("./db/conn.js");
const videoRoutes = require("./router/video.router.js");
const signUploadRoutes = require("./router/sign-upload.js");
const myRoute = require("./router/me.router.js");
const productRoute = require("./router/product.router.js");

// const enrollRoute = require("./router/enrollment.router.js");

const mongoose = require("mongoose");
const User = require("./models/user.models.js");

app.use("/", router);

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(require("./router/auth"));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
  timeout: 30000,
};
app.use(cors(corsOptions));

app.use("/video", videoRoutes);
app.use("/sign-upload", signUploadRoutes);
app.use("/products", productRoute);
app.use("/api", myRoute);

// app.use("/api", enrollRoute);

const PORT = 3001;
require("./db/conn.js");

app.get("/signin", (req, res) => {
  res.send("This is Login Page!");
});
app.get("/signup", (req, res) => {
  res.send("This is Registration Page!");
});

app.get("/", (req, res) => {
  res.send("Hi");
});

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
