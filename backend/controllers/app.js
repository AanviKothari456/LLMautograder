// backend/app.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
const questionRoutes = require("./routes/questionRoutes");
const codeRoutes = require("./routes/codeRoutes");
const testRoutes = require("./routes/testRoutes");
const evalRoutes = require("./routes/evalRoutes");

app.use("/questions", questionRoutes);
app.use("/code", codeRoutes);
app.use("/tests", testRoutes);
app.use("/eval", evalRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("LLM Autograder API is running.");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
