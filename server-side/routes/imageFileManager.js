const express = require("express");
const axios = require("axios");
const router = express.Router();
const getFineArtsHeaders = require("../shared/finerArtsheader");

const API_URL = process.env.FINEARTS_BASE_URL
  ? `${process.env.FINEARTS_BASE_URL}/list_images`
  : null;

if (!API_URL) {
  console.error(
    "❌ ERROR: FINEARTS_BASE_URL is not set in environment variables."
  );
}

router.post("/", async (req, res) => {
  try {
    if (!API_URL) {
      return res.status(500).json({ error: "API base URL is not configured." });
    }

    const { data } = await axios.post(API_URL, req.body, {
      headers: getFineArtsHeaders(),
    });

    res.json(data);
  } catch (error) {
    console.error("Axios Error:", error?.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error?.response?.data?.message || "Internal Server Error",
    });
  }
});

module.exports = router;
