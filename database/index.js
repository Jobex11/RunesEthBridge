const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
// added connection starts
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//connections ends

mongoose
  .connect(
    "mongodb+srv://joblawal33:joblawal33@cluster0.kcjbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const transactionSchema = new mongoose.Schema({
  transactionHash: String, // New field for the transaction hash
  from: String, // Ethereum sender address
  to: String, // Rune address (or recipient address)
  ethAmount: Number,
  account: String, // Ethereum account address
  timestamp: { type: Date, default: Date.now }, // Store the timestamp
});

const Transaction = mongoose.model("Transaction", transactionSchema);

app.post("/api/transactions", async (req, res) => {
  const { runeAddress, ethAmount, account, to } = req.body; // Add `to` to the request body

  try {
    // Simulate generating a transaction hash (replace with actual hash if available)
    const transactionHash = `0x${Math.random().toString(16).substr(2, 64)}`;

    const transaction = new Transaction({
      transactionHash,
      from: account,
      to: runeAddress || to, // Use runeAddress as `to` if provided
      ethAmount,
      account,
    });

    await transaction.save();

    // Log all the details to the console
    console.log(`
      Transaction Details:
      Hash: ${transactionHash}
      From: ${transaction.from}
      To: ${transaction.to}
      Eth Amount: ${transaction.ethAmount}
      Account: ${transaction.account}
      Timestamp: ${transaction.timestamp}
    `);

    res
      .status(201)
      .json({ message: "Transaction saved successfully!", transaction });
  } catch (error) {
    console.error("Error saving transaction:", error);
    res.status(500).json({ message: "Error saving transaction" });
  }
});

app.get("/api/transactions", async (req, res) => {
  try {
    // Fetch all transactions from the database
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Error fetching transactions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
