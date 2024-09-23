const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/transactionsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

// Define a Transaction schema
const transactionSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  amount: String,
  transactionHash: String,
  sender: String,
  receiver: String,
});

// Create a model
const Transaction = mongoose.model("Transaction", transactionSchema);

// Route to save transaction
app.post("/transaction", async (req, res) => {
  const { amount, transactionHash, sender, receiver } = req.body;

  // Create new transaction record
  const newTransaction = new Transaction({
    amount,
    transactionHash,
    sender,
    receiver,
  });

  try {
    await newTransaction.save();
    res.status(201).json({ message: "Transaction saved" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save transaction" });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
