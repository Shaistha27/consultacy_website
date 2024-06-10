// const dotenv = require("dotenv");
// dotenv.config({
//   path: "./config.env",
// });
// const { upload } = require("./middleware/multer.middleware.js");

// const express = require("express");
// const app = express();
// const bodyparser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const router = require("./router/user.router.js");
// const connect = require("./db/conn.js");
// const videoRoutes = require("./router/video.router.js");
// const signUploadRoutes = require("./router/sign-upload.js");
// const myRoute = require("./router/me.router.js");
// const productRoute = require("./router/product.router.js");

// // const enrollRoute = require("./router/enrollment.router.js");

// const mongoose = require("mongoose");
// const User = require("./models/user.models.js");

// app.use("/", router);

// app.use(express.json());
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(require("./router/auth"));
// app.use(cookieParser());

// // Update CORS configuration to allow localhost and local network IP
// const corsOptions = {
//   origin: (origin, callback) => {
//     const allowedOrigins = [
//       "http://localhost:3000",
//       "http://192.168.56.1:3000",
//     ];
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   optionsSuccessStatus: 200,
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
// };
// app.use(cors(corsOptions));
// app.use("/video", videoRoutes);
// app.use("/sign-upload", signUploadRoutes);
// app.use("/products", productRoute);
// app.use("/api", myRoute);

// // app.use("/api", enrollRoute);

// const PORT = 3001;
// require("./db/conn.js");

// app.get("/signin", (req, res) => {
//   res.send("This is Login Page!");
// });
// app.get("/signup", (req, res) => {
//   res.send("This is Registration Page!");
// });

// app.get("/", (req, res) => {
//   res.send("Hi");
// });

// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   try {
//     // Handle the uploaded file here
//     console.log(req.file);
//     res.send("File uploaded successfully");
//   } catch (error) {
//     console.error("Error handling file upload:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Example app listening on port ${PORT}`);
// });

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
const paymentRoutes = require("./router/payment.router.js");
const uuid = require("uuid");
const stripe = require("stripe")(
  "sk_test_51PGDQKSEBnF3Dk586BtP7lK9d7rIn0oNwI6y2JOmSYbzub2uvuqz9DxZM8jStkDfRo4zdJ6aOknlmApYMWplUYjb00UY0rfxTw"
);
// console.log("process.env.STRIPE_SECRET_KEY", process.env.STRIPE_SECRET_KEY);
const mongoose = require("mongoose");
const User = require("./models/user.models.js");
const Product = require("./models/product.models.js");
const authenticate = require("./middleware/authenticate.js");
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
app.use("/products", paymentRoutes);

// Route for payment form
app.get("/payment", (req, res) => {
  res.render("payment-form", {
    publishableKey:
      "pk_test_51PGDQKSEBnF3Dk583Lq3OukgmswxvtpKGe156nSgSRl44JGGzLE8YHzGJv60nU6AmyBQaBz5ydO9VrJpv0y8Bx7G003mtuigry",
  });
});

// app.post("/create-checkout-session", authenticate, async (req, res) => {
//   try {
//     const { productId } = req.body;
//     const product = await Product.findById(productId);

//     if (!product) {
//       return res.status(404).send("Product not found");
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: product.productName,
//               description: product.productDescription,
//             },
//             unit_amount: product.productPrice * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error("Error creating checkout session:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

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
