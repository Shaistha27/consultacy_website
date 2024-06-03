const express = require("express");
const router = express.Router();
const stripe = require("../utils/stripe");
const Product = require("../models/product.models.js");

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { productId } = req.body;

    // Fetch product details to get the price
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }

    const amount = product.productPrice * 100; // Convert to cents
    const description = `Purchase of ${product.productName}`; // Add a description

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "inr",
      description: description, // Include the description
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
