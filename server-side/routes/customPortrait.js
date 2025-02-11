const express = require("express");
const { ObjectId } = require("mongodb");
const { client } = require("../config/db");
const verifyToken = require("../middleware/auth");

const router = express.Router();
const portraitsCollection = client
  .db("HansAeggyArts")
  .collection("customPortrait");

// **Create a Custom Portrait**
router.post("/", verifyToken, async (req, res) => {
  try {
    const portrait = req.body;
    const result = await portraitsCollection.insertOne(portrait);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to add custom portrait" });
  }
});

// **Get All Custom Portraits**
router.get("/", async (req, res) => {
  try {
    const result = await portraitsCollection.find().toArray();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch custom portraits" });
  }
});

// **Get a Single Custom Portrait by ID**
router.get("/:id", async (req, res) => {
  try {
    const portrait = await portraitsCollection.findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!portrait) return res.status(404).json({ error: "Portrait not found" });
    res.send(portrait);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch custom portrait" });
  }
});

// **Delete a Custom Portrait**
router.delete("/:id", async (req, res) => {
  try {
    const result = await portraitsCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete custom portrait" });
  }
});

// **Update a Custom Portrait**
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPortrait = req.body;

    const result = await portraitsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedPortrait }
    );

    if (result.modifiedCount > 0) {
      res.send({ success: true, message: "Portrait updated successfully" });
    } else {
      res.status(404).send({ success: false, message: "Portrait not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update custom portrait" });
  }
});

module.exports = router;
