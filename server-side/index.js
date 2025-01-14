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
    const finerArts = database.collection("finerarts");
    const addNewProduct = database.collection("products");
    const userCollection = database.collection("users");

    app.get("/finerarts", async (req, res) => {
      const cursor = finerArts.find().project({ _id: 0 });
      const result = await cursor.toArray();
      // console.log(result);
      // const res = await apiClient.post(url, data);
      res.send(result);
    });

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
      // console.log(result);

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

    app.post("/api/list", async (req, res) => {
      try {
        console.log(req.body);
        const response = await axios.post(API_URL, req.body, {
          headers: {
            "Content-Type": "application/json",
            web_api_key: `${process.env.WEB_API_KEY}`,
            app_key: `${process.env.WEB_APP_KEY}`,
          },
        });
        console.log(response);
        res.send(response.data);
      } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
      }
    });

    const API_URL_Products =
      "https://api.finerworks.com/v3/get_product_details";

    app.post("/api/products", async (req, res) => {
      try {
        console.log("Incoming Payload:", req.body);

        // Validate that the request body is an array
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

        const response = await axios.post(API_URL_Products, req.body, {
          headers,
        });

        res.send(response.data);
      } catch (error) {
        console.error("Error Response:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
          status: "error",
          message: error.response?.data?.message || "Internal Server Error",
          details: error.response?.data || error.message,
        });
      }
    });

    // Submit Order

    app.post("/api/submit-order", async (req, res) => {
      const orderData = req.body;

      try {
        const response = await fetch(
          "https://api.finerworks.com/v3/submit_orders",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              web_api_key: `${process.env.WEB_API_KEY}`,
              app_key: `${process.env.WEB_APP_KEY}`, // Secure your API key
            },
            body: JSON.stringify(orderData),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          res.status(200).json(responseData);
        } else {
          const errorData = await response.json();
          res.status(response.status).json(errorData);
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // const API_URL_Products =
    //   "https://api.finerworks.com/v3/get_product_details";

    // app.post("/api/products", async (req, res) => {
    //   try {
    //     console.log("Incoming Payload:", req.body);

    //     // Validate that the request body contains the required data
    //     if (
    //       !Array.isArray(req.body) ||
    //       req.body.some(
    //         (item) => !item.product_sku || typeof item.product_sku !== "string" // Ensure each item has a valid SKU
    //       )
    //     ) {
    //       return res.status(400).json({
    //         status: "error",
    //         message:
    //           "Request body must be a JSON array of objects containing a 'product_sku' field.",
    //       });
    //     }

    //     // Construct headers
    //     const headers = {
    //       "Content-Type": "application/json",
    //       web_api_key: `${process.env.WEB_API_KEY}`,
    //       app_key: `${process.env.WEB_APP_KEY}`,
    //     };

    //     // Send request to the FinerWorks API
    //     const response = await axios.post(API_URL_Products, req.body, {
    //       headers,
    //     });

    //     // Respond with the product list
    //     res.status(200).json({
    //       status: "success",
    //       product_list: response.data.product_list || [],
    //     });
    //   } catch (error) {
    //     console.error(
    //       "Error fetching products:",
    //       error.response?.data || error.message
    //     );

    //     // Return an error response
    //     res.status(error.response?.status || 500).json({
    //       status: "error",
    //       message: error.response?.data?.message || "Internal Server Error",
    //     });
    //   }
    // });

    // Get Product Details

    const API_URL_Select =
      "https://api.finerworks.com/v3/list_file_selection?guid={guid}";

    app.get("/api/select", async (req, res) => {
      try {
        console.log(req.body);
        const response = await axios.post(API_URL_Select, req.body, {
          headers: {
            "Content-Type": "application/json",
            web_api_key: `${process.env.WEB_API_KEY}`,
            app_key: `${process.env.WEB_APP_KEY}`,
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
