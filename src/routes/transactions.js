// routes/transactions.js
import express from "express";
import Transaction from "../models/Transaction.js"; // Import your transaction model

const router = express.Router();

// Get transaction history for a user
router.get("/history/:address", async (req, res) => {
  const userAddress = req.params.address;

  try {
    const transactions = await Transaction.find({ sender: userAddress }).sort({
      timestamp: -1,
    });
    res.json(transactions);
  } catch (err) {
    console.error("Error fetching transaction history:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
