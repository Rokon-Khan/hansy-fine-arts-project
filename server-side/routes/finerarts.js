const express = require("express");
const axios = require("axios");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const { client } = require("../config/db");

const API_URL = `${process.env.FINEARTS_BASE_URL}/list_collections`;

const finerArtsCollection = client.db("HansAeggyArts").collection("finerArts");

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

// **Create a FinerArt**
router.post("/", verifyToken, async (req, res) => {
  try {
    const art = req.body;
    const result = await finerArtsCollection.insertOne(art);
    res.send(result);
  } catch (error) {
    console.error("❌ Error adding FinerArt:", error);
    res.status(500).json({ error: "Failed to add FinerArt" });
  }
});

// **Get All FinerArts**
router.get("/", async (req, res) => {
  try {
    const result = await finerArtsCollection.find().project({ _id: 0 }).toArray();
    res.send(result);
  } catch (error) {
    console.error("❌ Error fetching FinerArts:", error);
    res.status(500).json({ error: "Failed to fetch FinerArts" });
  }
});

module.exports = router;
