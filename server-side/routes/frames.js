const express = require("express");
const axios = require("axios");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const { client } = require("../config/db");
const getFineArtsHeaders = require("../shared/finerArtsheader");

const API_URL = `${process.env.FINEARTS_BASE_URL}/list_collections`;

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const response = await axios.post(API_URL, req.body, {
      headers: getFineArtsHeaders(),
    });
    res.send(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

module.exports = router;
