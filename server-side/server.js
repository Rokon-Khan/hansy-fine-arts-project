
require("dotenv").config();
 // Ensures required ENV variables are set
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const { dbConnect } = require("./config/db");
const apiRoutes = require("./routes/index");
const app = express();

const PORT = process.env.PORT || 5001;

// **Middleware**
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://hansyaeggy-watercolor-art.surge.sh",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(compression());

// **Rate Limiter**
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // Limit each IP to 100 requests per window
  message: { error: "Too many requests, please try again later." },
});
app.use(limiter);

// **Database Connection**
dbConnect();

// **API Routes**
app.use("/api", apiRoutes);

// **Health Check Route**
app.get("/", (req, res) => {
  res.send({ message: "Hans Aeggy Art Server is running." });
});

// **Global Error Handler**
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

// **Start Server**
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
