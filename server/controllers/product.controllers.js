const Product = require("../models/product.models");
const User = require("../models/user.models");
const authenticate = require("../middleware/authenticate");
exports.createProductController = async (req, res) => {
  console.log("createProductController invoked");
  try {
    const { productName, productDescription, productPrice, Availability } =
      req.body;
    console.log(
      "product details",
      productName,
      productDescription,
      productPrice,
      Availability
    );
    console.log(req.body);
    // Validate required fields
    if (!productName)
      return res.status(400).send({ error: "Name is Required" });
    if (!productDescription)
      return res.status(400).send({ error: "Description is Required" });
    if (!productPrice)
      return res.status(400).send({ error: "Price is Required" });
    if (!Availability)
      return res.status(400).send({ error: "Price is Required" });

    // Check if the product already exists
    const existingProduct = await Product.findOne({ productName });
    if (existingProduct)
      return res.status(400).send({ error: "This product already exists!" });

    // Create and save the new product
    const product = new Product({
      productName,
      productDescription,
      productPrice,
      Availability,
    });
    await product.save();
    console.log(product);
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in creating product",
    });
  }
};

// Get All Courses
exports.getAllCourses = async (req, res) => {
  try {
    const products = await Product.find();
    console.log("products", products);
    products.forEach((Product) =>
      console.log("product name", Product.productName)
    );
    products.forEach((Product) =>
      console.log("product price", Product.productPrice)
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// course enrollment

exports.enrollInProduct = async (req, res) => {
  try {
    console.log("rootUser", req.rootUser); // Check if rootUser is correctly attached
    const userId = req.rootUser._id.toString();
    const productId = req.params.id;
    console.log("userId", userId);
    console.log("productId", productId);

    // Find the product to ensure it exists
    const product = await Product.findById(productId);
    if (!product) {
      console.log("Product not found");
      return res.status(404).json({ message: "Product not found" });
    }

    // Find the user and update their enrolledCourses list
    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    // Ensure enrolledCourses is initialized
    if (!user.enrolledCourses) {
      user.enrolledCourses = [];
    }

    // Check if the user is already enrolled
    if (user.enrolledCourses.includes(productId)) {
      console.log("User is already enrolled");
      return res
        .status(409)
        .json({ message: "User is already enrolled in this course" });
    }

    user.enrolledCourses.push(productId);
    await user.save();

    console.log("Enrolled successfully");
    res.status(200).json({ message: "Enrolled successfully" });
  } catch (error) {
    console.error("Error enrolling in product:", error);
    res.status(500).json({ message: "Error enrolling in product", error });
  }
};
