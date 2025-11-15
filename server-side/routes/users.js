const express = require("express");
const jwt = require("jsonwebtoken");
const { client } = require("../config/db");

const router = express.Router();
const usersCollection = client.db("HansAeggyArts").collection("users");

// **Save or Update User**
router.post("/:email", async (req, res) => {
  const email = req.params.email;
  const query = { email };
  const user = req.body;

  try {
    const existingUser = await usersCollection.findOne(query);
    if (existingUser) return res.send(existingUser);

    const result = await usersCollection.insertOne({
      ...user,
      role: "customer",
      timestamp: Date.now(),
    });
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to save user" });
  }
});

// **Generate JWT Token**
router.post("/jwt", (req, res) => {
  const email = req.body;
  const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
});

// **Logout**
router.get("/logout", (req, res) => {
  res
    .clearCookie("token", { maxAge: 0, secure: true, sameSite: "none" })
    .send({ success: true });
});


router.get("/", async (req, res) => {
  try {
    const { limit = 50 } = req.query; // ✅ Allows optional pagination (default: 50 users)
    const users = await usersCollection
      .find({}, { projection: { password: 0 } }) // ✅ Exclude sensitive fields (e.g., password)
      .limit(parseInt(limit)) // ✅ Optimize query response size
      .toArray();

    if (!users.length) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    res.status(500).json({ message: "Failed to retrieve users" });
  }
});

module.exports = router;
