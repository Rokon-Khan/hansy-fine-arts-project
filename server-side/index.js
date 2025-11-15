// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const port = process.env.PORT || 5000;
// const app = express();
// const axios = require("axios");

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const { config } = require("dotenv");
// // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hwao6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();

//     const database = client.db("hansyArt");
//     const finerArts = database.collection("finerarts");
//     const addNewProduct = database.collection("products");
//     const userCollection = database.collection("users");

//     app.get("/finerarts", async (req, res) => {
//       const cursor = finerArts.find().project({ _id: 0 });
//       const result = await cursor.toArray();
//       // console.log(result);
//       // const res = await apiClient.post(url, data);
//       res.send(result);
//     });

//     // Add New Art To Database

//     app.post("/users", async (req, res) => {
//       const newUser = req.body;
//       console.log("creating new user", newUser);
//       const result = await userCollection.insertOne(newUser);
//       res.send(result);
//     });

//     // Add New Product to Database
//     app.post("/products", async (req, res) => {
//       const product = req.body;
//       console.log("New product Added", product);
//       const result = await addNewProduct.insertOne(product);
//       res.send(result);
//     });

//     // Get Campaign From Database

//     app.get("/products", async (req, res) => {
//       const cursor = addNewProduct.find();
//       const result = await cursor.toArray();
//       // console.log(result);

//       res.send(result);
//     });

//     app.get("/products/:id", async (req, res) => {
//       const id = req.params.id;
//       const cursor = await addNewProduct.findOne({ _id: new ObjectId(id) });
//       // const result = await cursor.toArray();

//       res.send(cursor);
//     });

//     app.delete("/newart/:id", async (req, res) => {
//       const id = req.params.id;
//       console.log("Delete Campaign from Database", id);
//       const query = { _id: new ObjectId(id) };
//       const result = await addNewArt.deleteOne(query);
//       res.send(result);
//     });

//     // Update  campaign Data

//     app.put("/newart/:id", async (req, res) => {
//       const id = req.params.id;

//       const product = req.body;
//       const filter = { _id: new ObjectId(id) };
//       const options = { upsert: true };
//       const updateProduct = {
//         $set: product,
//       };
//       const result = await addNewArt.updateOne(filter, updateProduct, options);
//       res.send(result);
//     });

//     // Get user From Database
//     app.get("/users", async (req, res) => {
//       const cursor = userCollection.find();
//       const result = await cursor.toArray();
//       res.send(result);
//     });

//     // Get Indivudual User With Dynamic ID
//     app.get("/users/:id", async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const user = await userCollection.findOne(query);
//       res.send(user);
//     });

//     // Fineer Work API

//     const API_URL = "https://api.finerworks.com/v3/list_collections";

//     app.post("/api/list", async (req, res) => {
//       try {
//         console.log(req.body);
//         const response = await axios.post(API_URL, req.body, {
//           headers: {
//             "Content-Type": "application/json",
//             web_api_key: `${process.env.WEB_API_KEY}`,
//             app_key: `${process.env.WEB_APP_KEY}`,
//           },
//         });
//         console.log(response);
//         res.send(response.data);
//       } catch (error) {
//         res.status(error.response?.status || 500).send(error.message);
//       }
//     });

//     const API_URL_Products =
//       "https://api.finerworks.com/v3/get_product_details";

//     app.post("/api/products", async (req, res) => {
//       try {
//         console.log("Incoming Payload:", req.body);

//         // Validate that the request body is an array
//         if (!Array.isArray(req.body)) {
//           return res.status(400).json({
//             status: "error",
//             message: "Request body must be a JSON array.",
//           });
//         }

//         const headers = {
//           "Content-Type": "application/json",
//           web_api_key: `${process.env.WEB_API_KEY}`,
//           app_key: `${process.env.WEB_APP_KEY}`,
//         };

//         const response = await axios.post(API_URL_Products, req.body, {
//           headers,
//         });

//         res.send(response.data);
//       } catch (error) {
//         console.error("Error Response:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({
//           status: "error",
//           message: error.response?.data?.message || "Internal Server Error",
//           details: error.response?.data || error.message,
//         });
//       }
//     });

//     // Product Detail by SKU
//     // app.get("/products/sku/:sku", async (res, req) => {
//     //   console.log(req.params, "sku");
//     // });

//     app.get("/products/sku/:sku", async (req, res) => {
//       // console.log(req.params.sku, "sku");
//       // // You might also want to send a response back
//       // res.send({ message: `Product SKU: ${req.params.sku}` });
//       const sku = req.params.sku;
//       const product = await finerArts.findOne({ product_sku: sku });
//       res.send(product);
//     });

//     // Submit Order

//     app.post("/api/submit-order", async (req, res) => {
//       const orderData = req.body;

//       try {
//         const response = await fetch(
//           "https://api.finerworks.com/v3/submit_orders",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               web_api_key: `${process.env.WEB_API_KEY}`,
//               app_key: `${process.env.WEB_APP_KEY}`, // Secure your API key
//             },
//             body: JSON.stringify(orderData),
//           }
//         );

//         if (response.ok) {
//           const responseData = await response.json();
//           res.status(200).json(responseData);
//         } else {
//           const errorData = await response.json();
//           res.status(response.status).json(errorData);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//       }
//     });

//     // Get Product Details

//     const API_URL_Select =
//       "https://api.finerworks.com/v3/list_file_selection?guid={guid}";

//     app.get("/api/select", async (req, res) => {
//       try {
//         console.log(req.body);
//         const response = await axios.post(API_URL_Select, req.body, {
//           headers: {
//             "Content-Type": "application/json",
//             web_api_key: `${process.env.WEB_API_KEY}`,
//             app_key: `${process.env.WEB_APP_KEY}`,
//           },
//         });
//         console.log(response);
//         res.send(response.data);
//       } catch (error) {
//         res.status(error.response?.status || 500).send(error.message);
//       }
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get("/", async (req, res) => {
//   res.send("Server is running");
// });

// app.listen(port, () => {
//   console.log(`Hansy Art Crud Server is Running on Port: ${port}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const axios = require("axios");

const port = process.env.PORT || 5001;
const app = express();
// middleware
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://hansyaeggy-watercolor-art.surge.sh",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hp21t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    const database = client.db("HansAeggyArts");
    const usersCollection = database.collection("users");
    const artCollection = database.collection("hansArts");
    const finerArtsCollection = database.collection("finerArts");
    const portraitsCollection = database.collection("customPortrait");

    // save or update a user in db
    app.post("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = req.body;
      // check if user exists in db
      const isExist = await usersCollection.findOne(query);
      if (isExist) {
        return res.send(isExist);
      }
      const result = await usersCollection.insertOne({
        ...user,
        role: "customer",
        timestamp: Date.now(),
      });
      res.send(result);
    });

    // Generate jwt token
    app.post("/jwt", async (req, res) => {
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
    // Logout
    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            maxAge: 0,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({ success: true });
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // save a art data in db
    app.post("/arts", verifyToken, async (req, res) => {
      const art = req.body;
      const result = await artCollection.insertOne(art);
      res.send(result);
    });
    // save a Csutom Portrait Art data in db
    app.post("/custom-portrait", async (req, res) => {
      const portrait = req.body;
      const result = await portraitsCollection.insertOne(portrait);
      res.send(result);
    });

    // get all arts from db
    app.get("/arts", async (req, res) => {
      const result = await artCollection.find().toArray();
      res.send(result);
    });

    // Get All Users
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get The Art Detail with  id

    app.get("/arts/:id", async (req, res) => {
      const { id } = req.params;

      // Validate ID
      if (!ObjectId.isValid(id)) {
        return res
          .status(400)
          .send({ success: false, message: "Invalid class ID" });
      }

      try {
        const artData = await artCollection.findOne({
          _id: new ObjectId(id),
        });

        if (!artData) {
          return res
            .status(404)
            .send({ success: false, message: "Class not found" });
        }

        res.send(artData);
      } catch (error) {
        console.error("Error fetching class data:", error);
        res
          .status(500)
          .send({ success: false, message: "Failed to fetch class" });
      }
    });

    // Delete My  Class

    app.delete("/arts/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const result = await artCollection.deleteOne({
          _id: new ObjectId(id),
        });
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete class" });
      }
    });

    // Art Status Updated with ID
    app.put("/arts/:id", async (req, res) => {
      const id = req.params.id;
      const updatedArt = req.body;

      try {
        const result = await artCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedArt }
        );
        if (result.modifiedCount > 0) {
          res.send({ success: true, message: "Class updated successfully" });
        } else {
          res.status(404).send({ success: false, message: "Class not found" });
        }
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .send({ success: false, message: "Failed to update class" });
      }
    });

    // Post FinerArts a art data in db
    app.post("/finerarts", verifyToken, async (req, res) => {
      const art = req.body;
      const result = await finerArtsCollection.insertOne(art);
      res.send(result);
    });

    // FinerArts Product Get

    app.get("/finerarts", async (req, res) => {
      const cursor = finerArtsCollection.find().project({ _id: 0 });
      const result = await cursor.toArray();
      // console.log(result);
      // const res = await apiClient.post(url, data);
      res.send(result);
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

    // Finer Art Product Details API URL
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

    // Product Detail by SKU need to update latest code

    app.get("/products/sku/:sku", async (req, res) => {
      // console.log(req.params.sku, "sku");
      // // You might also want to send a response back
      // res.send({ message: `Product SKU: ${req.params.sku}` });
      const sku = req.params.sku;
      const product = await finerArts.findOne({ product_sku: sku });
      res.send(product);
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

    // Get Product Details

    const API_URL_Select =
      "https://api.finerworks.com/v3/list_file_selection?guid={guid}";

    // need to add update code  
    
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
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from Hans Aeggy Art Server Server..");
});

app.listen(port, () => {
  console.log(`The WaterColor Art is running on port ${port}`);
});
