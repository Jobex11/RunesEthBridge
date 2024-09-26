import { getWeb3Instance, getContractInstance } from "./web3Utils";
import contractABI from "./contractABI.json";
const CONTRACT_ADDRESS = "0x307fEa2742660f32c5b35FeFa98f6d4069481adF";

export const lockETH = async (runeAddress, ethAmount, account) => {
  const web3 = getWeb3Instance();

  // Check if web3 is available (MetaMask installed)
  if (!web3) {
    console.error("MetaMask is not installed");
    return {
      status: "error",
      message: "MetaMask is not installed",
    };
  }

  // Create a contract instance
  const contract = getContractInstance(web3, CONTRACT_ADDRESS, contractABI);
  if (!contract) {
    console.error("Contract instance is null");
    return {
      status: "error",
      message: "Contract instance is null",
    };
  }

  try {
    // Convert ETH amount to Wei
    const amountInWei = web3.utils.toWei(ethAmount, "ether");

    // Send transaction
    await contract.methods
      .lockETH(runeAddress)
      .send({ from: account, value: amountInWei });

    return {
      status: "success",
      message: "ETH locked successfully!",
    };
  } catch (error) {
    console.error("Transaction error:", error); // Log error for debugging
    return {
      status: "error",
      message: error.message || "Transaction failed",
    };
  }
};

/*
import { getWeb3Instance, getContractInstance } from "./web3Utils";
import contractABI from "./contractABI.json";
const CONTRACT_ADDRESS = "0x307fEa2742660f32c5b35FeFa98f6d4069481adF";

export const lockETH = async (runeAddress, ethAmount, account) => {
  const web3 = getWeb3Instance();

  if (!web3) {
    return {
      status: "error",
      message: "MetaMask is not installed",
    };
  }

  const contract = getContractInstance(web3, CONTRACT_ADDRESS, contractABI);

  if (contract) {
    try {
      const amountInWei = web3.utils.toWei(ethAmount, "ether");
      await contract.methods
        .lockETH(runeAddress)
        .send({ from: account, value: amountInWei });

      return {
        status: "success",
        message: "ETH locked successfully!",
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message || "Transaction failed",
      };
    }
  } else {
    return {
      status: "error",
      message: "Contract instance is null",
    };
  }
};

*/
