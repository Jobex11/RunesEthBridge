const express = require("express");
const connectDB = require("./db");
const app = express();

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/api", transactionRoutes);

// Connect to MongoDB
connectDB();

// Middleware for JSON parsing
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
