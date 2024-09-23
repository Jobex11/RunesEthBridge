const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// POST route to store transaction details
router.post("/transaction", async (req, res) => {
  const { sender, receiver, amount, transactionHash, timestamp } = req.body;

  try {
    const newTransaction = new Transaction({
      sender,
      receiver,
      amount,
      transactionHash,
      timestamp,
    });

    await newTransaction.save();
    res.status(201).json({ success: true, message: "Transaction saved" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error saving transaction" });
  }
});

// GET route to fetch transaction history
router.get("/transaction/:account", async (req, res) => {
  const account = req.params.account;

  try {
    const transactions = await Transaction.find({ sender: account });
    res.status(200).json({ success: true, transactions });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching transactions" });
  }
});

module.exports = router;
