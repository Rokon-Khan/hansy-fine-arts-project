const express = require("express");
const { ObjectId } = require("mongodb");
const verifyToken = require("../middleware/auth");
const { client } = require("../config/db");

const router = express.Router();
const artCollection = client.db("HansAeggyArts").collection("hansArts");

// **Create Art**
router.post("/", verifyToken, async (req, res) => {
  try {
      const result = await artCollection.insertOne(req.body);
      console.log(result)
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to create art" });
  }
});

// **Get All Arts**
router.get("/", async (req, res) => {
  try {
      const result = await artCollection.find().toArray();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve arts" });
  }
});

// **Get Art by ID**
router.get("/:id", async (req, res) => {
  try {
    const art = await artCollection.findOne({ _id: new ObjectId(req.params.id) });
    if (!art) return res.status(404).send({ success: false, message: "Class not found" });
    res.send(art);
  } catch (error) {
    res.status(500).send({ success: false, message: "Failed to fetch class" });
  }
});

// **Update Art**
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedArt = req.body;

  try {
    const result = await artCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedArt }
    );
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to update art" });
  }
});

// **Delete Art**
router.delete("/:id", async (req, res) => {
  try {
    const result = await artCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to delete art" });
  }
});

module.exports = router;
