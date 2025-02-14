    const express = require("express");
const { ObjectId } = require("mongodb");
const { client } = require("../config/db");
const { default: axios } = require("axios");
const getFineArtsHeaders = require("../shared/finerArtsheader");

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


const API_URL = `${process.env.FINEARTS_BASE_URL}/list_product_types`;

router.post("/product-type", async (req, res) => {
  try {
    console.log("📌 Incoming Request Body:", req.body);

    const { ids } = req.body;

    // ✅ Validate if `ids` is an array
    if (!Array.isArray(ids)) {
      return res.status(400).json({ error: "'ids' must be a non-empty array" });
    }

    const response = await axios.post(
      API_URL,
      { ids }, // ✅ Sending correct request body
      { headers: getFineArtsHeaders(), maxRedirects: 5 } // ✅ Limited redirects
    );

    console.log("📌 API Response Status:", response.status);
    console.log("📌 API Response Data:", response.data);

    // ✅ If API mistakenly returns data inside "error" key, extract and return it properly
    if (response.data?.error && Array.isArray(response.data.error)) {
      return res.json({ product_types: response.data.error });
    }

    // ✅ Send normal response if "error" key is absent
    res.json(response.data);
  } catch (error) {
    console.error("❌ API Error:", error.response?.data || error.message);

    // ✅ Better error response handling
    res.status(error.response?.status || 500).json({
      error: error.response?.data || "Internal Server Error",
    });
  }
});


const MEDIA_API_URL = "https://test-api.finerworks.com/v3/list_media_types";

router.post("/media-type", async (req, res) => {
  try {
    console.log("📌 Incoming Request Body:", MEDIA_API_URL);
    const { ids } = req.body;

    // ✅ Validate if `ids` is an array and not empty
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: "'ids' must be a non-empty array" });
    }

    const response = await axios.post(
      MEDIA_API_URL,
      { ids }, // ✅ Sending correct request body
      { headers: getFineArtsHeaders(), maxRedirects: 5 } // ✅ Limited redirects
    );

    console.log("📌 API Response Status:", response.status);
    console.log("📌 API Response Data:", response.data);

    // ✅ If API mistakenly returns data inside "error" key, extract and return it properly
    if (response.data?.error && Array.isArray(response.data.error)) {
      return res.json({ media_types: response.data.error });
    }

    // ✅ Send normal response if "error" key is absent
    res.json(response.data);
  } catch (error) {
    console.error("❌ API Error:", error.response?.data || error.message);

    // ✅ Better error response handling
    res.status(error.response?.status || 500).json({
      error: error.response?.data || "Internal Server Error",
    });
  }
});

const STYLE_API_URL = "https://test-api.finerworks.com/v3/list_style_types";

router.post("/style-type", async (req, res) => {
  try {
    console.log("📌 Incoming Request Body:", req.body);

    const { ids } = req.body;

    // ✅ Validate if `ids` is an array and not empty
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: "'ids' must be a non-empty array" });
    }

    const response = await axios.post(
      STYLE_API_URL,
      { ids }, // ✅ Sending correct request body
      { headers: getFineArtsHeaders(), maxRedirects: 5 } // ✅ Limited redirects
    );

    console.log("📌 API Response Status:", response.status);
    console.log("📌 API Response Data:", response.data);

    // ✅ If API mistakenly returns data inside "error" key, extract and return it properly
    if (response.data?.error && Array.isArray(response.data.error)) {
      return res.json({ style_types: response.data.error });
    }

    // ✅ Send normal response if "error" key is absent
    res.json(response.data);
  } catch (error) {
    console.error("❌ API Error:", error.response?.data || error.message);

    // ✅ Better error response handling
    res.status(error.response?.status || 500).json({
      error: error.response?.data || "Internal Server Error",
    });
  }
});




module.exports = router;
