import React, { useState } from "react";

const ConnectBTCWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    try {
      const wallet = window.unisat; // Unisat wallet object
      if (!wallet) {
        alert("Unisat Wallet not found. Please install Unisat extension.");
        return;
      }

      // Request access to the user's wallet
      const accounts = await wallet.requestAccounts();
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {walletAddress ? `Connected: ${walletAddress}` : "Connect BTC Wallet"}
      </button>
    </div>
  );
};

export default ConnectBTCWallet;
