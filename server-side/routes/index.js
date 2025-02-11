const express = require("express");
const router = express.Router();
const userRoutes = require("./users");
const artRoutes = require("./arts");
const finerartsRoutes = require("./finerarts");
const productRoutes = require("./products");
const orderRoutes = require("./orders");
const customPortraitRoutes = require("./customPortrait");
const listRoutes = require("./list");

router.use("/users", userRoutes);
router.use("/arts", artRoutes);
router.use("/finerarts", finerartsRoutes);
router.use("/products", productRoutes);
router.use("/list", listRoutes);
router.use("/custom-portrait", customPortraitRoutes);
router.use("/submit-order", orderRoutes);




// select API
router.use ("/api/select", async (req, res) => {
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
    })


module.exports = router;
