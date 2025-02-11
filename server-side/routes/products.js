    const express = require("express");
const { ObjectId } = require("mongodb");
const { client } = require("../config/db");
const { default: axios } = require("axios");

const router = express.Router();


// **Fetch External Product Details**
const API_URL_Products = "https://api.finerworks.com/v3/get_product_details";

router.post("/", async (req, res) => {
  try {
    console.log("Incoming Payload:", req.body);

    if (!Array.isArray(req.body)) {
      return res.status(400).json({
        status: "error",
        message: "Request body must be a JSON array.",
      });
    }

    const headers = {
      "Content-Type": "application/json",
      web_api_key: `${process.env.WEB_API_KEY}`,
      app_key: `${process.env.WEB_APP_KEY}`,
    };

    const response = await axios.post(API_URL_Products, req.body, { headers });

    res.send(response.data);
  } catch (error) {
    console.error("❌ Error fetching external product details:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      status: "error",
      message: error.response?.data?.message || "Internal Server Error",
      details: error.response?.data || error.message,
    });
  }
});

module.exports = router;
