const express = require("express");
const axios = require("axios");
const router = express.Router();


router.post("/list", async (req, res) => {
  try {
    const response = await axios.post(API_URL, req.body, {
      headers: {
        "Content-Type": "application/json",
        web_api_key: process.env.WEB_API_KEY,
        app_key: process.env.WEB_APP_KEY,
      },
    });
    res.send(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});


module.exports = router;