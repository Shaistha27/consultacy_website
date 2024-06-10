const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51PGDQKSEBnF3Dk58CyzSyUIWsd04IGW8mOP1O7ml4IR6BtlhVcbru1eeW7B2wVWSIOn9Fd9WEHPu0w3C0Ys01V9T00DniPspdd"
);

router.post("/create-subscription", async (req, res) => {
  try {
    const { paymentMethodId, customerName, customerAddress, priceId } =
      req.body;

    // Create a new customer object
    const customer = await stripe.customers.create({
      name: customerName,
      address: {
        line1: customerAddress.line1,
        line2: customerAddress.line2,
        city: customerAddress.city,
        state: customerAddress.state,
        postal_code: customerAddress.postal_code,
        country: customerAddress.country,
      },
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    // Create the subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      expand: ["latest_invoice.payment_intent"],
    });

    res.status(200).json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      redirectUrl: "/videolist",
    });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
