const express = require("express");
const axios = require("axios");
const verifyToken = require("../middleware/auth");

const router = express.Router();
const API_URL_ORDERS = "https://api.finerworks.com/v3/submit_orders";

// **Submit Order**
router.post("/submit-order", verifyToken, async (req, res) => {
  const orderData = req.body;

  try {
    const response = await fetch(API_URL_ORDERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        web_api_key: `${process.env.WEB_API_KEY}`,
        app_key: `${process.env.WEB_APP_KEY}`, // Secure your API key
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      const responseData = await response.json();
      res.status(200).json(responseData);
    } else {
      const errorData = await response.json();
      res.status(response.status).json(errorData);
    }
  } catch (error) {
    console.error("Order Submission Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
