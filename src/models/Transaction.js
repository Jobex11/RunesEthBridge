// models/Transaction.js
import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  tokenName: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  runeAddress: {
    type: String,
    required: true,
  },
  transactionHash: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
