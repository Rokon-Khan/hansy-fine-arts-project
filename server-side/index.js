// User: hansyarts
// Pass: spUqaJjD6yvFH05L

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const axios = require("axios");

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { config } = require("dotenv");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hwao6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("hansyArt");
    const addNewProduct = database.collection("products");
    const userCollection = database.collection("users");

    // Add New Art To Database

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("creating new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // Add New Product to Database
    app.post("/products", async (req, res) => {
      const product = req.body;
      console.log("New product Added", product);
      const result = await addNewProduct.insertOne(product);
      res.send(result);
    });

    // Get Campaign From Database

    app.get("/products", async (req, res) => {
      const cursor = addNewProduct.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const cursor = await addNewProduct.findOne({ _id: new ObjectId(id) });
      // const result = await cursor.toArray();

      res.send(cursor);
    });

    app.delete("/newart/:id", async (req, res) => {
      const id = req.params.id;
      console.log("Delete Campaign from Database", id);
      const query = { _id: new ObjectId(id) };
      const result = await addNewArt.deleteOne(query);
      res.send(result);
    });

    // Update  campaign Data

    app.put("/newart/:id", async (req, res) => {
      const id = req.params.id;

      const product = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateProduct = {
        $set: product,
      };
      const result = await addNewArt.updateOne(filter, updateProduct, options);
      res.send(result);
    });

    // Get user From Database
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get Indivudual User With Dynamic ID
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollection.findOne(query);
      res.send(user);
    });

    // Fineer Work API

    const API_URL = "https://api.finerworks.com/v3/list_collections";

    app.post("/api/test", async (req, res) => {
      try {
        console.log(req.body);
        const response = await axios.post(API_URL, req.body, {
          headers: {
            "Content-Type": "application/json",
            web_api_key: "4b1a2f13-18a3-4bfa-a46e-cf41913025d9",
            app_key: "6b3a5893-e9b3-42dd-a33a-db85390a40bb",
          },
        });
        console.log(response);
        res.send(response.data);
      } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
      }
    });

    const API_URL_Products = "https://api.finerworks.com/v3/list_mats";

    app.post("/api/products", async (req, res) => {
      try {
        console.log(req.body);
        const response = await axios.post(API_URL_Products, req.body, {
          headers: {
            "Content-Type": "application/json",
            web_api_key: "4b1a2f13-18a3-4bfa-a46e-cf41913025d9",
            app_key: "6b3a5893-e9b3-42dd-a33a-db85390a40bb",
          },
        });
        console.log(response);
        res.send(response.data);
      } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Hansy Art Crud Server is Running on Port: ${port}`);
});
