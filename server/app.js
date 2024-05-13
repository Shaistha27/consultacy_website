const dotenv = require("dotenv");
dotenv.config();
const { upload } = require("./middleware/multer.middleware.js");

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const router = require("./router/user.router.js");
const connect = require("./db/conn.js");
const videoRoutes = require("./router/video.router.js");
const signUploadRoutes = require("./router/sign-upload.js")


const mongoose = require("mongoose");
const User = require("./models/user.models.js");

app.use("/",router);

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));


const corsOptions = {
  origin: "http://localhost:3000",
  timeout: 30000, 
};
app.use(cors(corsOptions));

app.use("/video", videoRoutes);
app.use("/sign-upload", signUploadRoutes);

const PORT = 3001;
require("./db/conn.js");



app.get("/contact", (req, res) => {
  res.cookie("Test", "thapa", {
    domain: "yourdomain.com", 
    path: "/contact", 
    secure: true, 
    sameSite: "strict", 
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



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});




// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const fs = require('fs');

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: 'dwoxvpgr3',
//   api_key: '459769312621715',
//   api_secret: 'mA4WSbRRdBbxSYSVJKTzOwIXF34'
// });


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

// // Set up Multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads'); // Save uploaded files to the 'uploads' directory
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + '-' + file.originalname); // Use a unique filename
//   }
// });

// const upload = multer({ storage: storage });

// // Route for uploading video using Multer
// app.post("/video", upload.single("video"), async (req, res) => {
//   try {
//     const { path } = req.file;

//     // Upload the video file to Cloudinary
//     const cloudinaryUploadResult = await cloudinary.uploader.upload(path, {
//       resource_type: 'video'
//     });

//     // Delete the temporary file
//     fs.unlinkSync(path);

//     res.status(200).json({ url: cloudinaryUploadResult.secure_url });
//   } catch (error) {
//     console.error("Error uploading video:", error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
