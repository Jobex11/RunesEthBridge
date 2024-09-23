import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import {
  Airdrop,
  CryptoHistory,
  DepositCrypto,
  WithdrawCrypto,
  Blog,
} from "./components";
import { Home } from "./pages";
import Dashboard from "./components/Dashboard";
import Stack from "./components/Stack";
function App() {
  const [shared, setShared] = useState("initial data");
  return (
    <>
      <div className="app w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<DepositCrypto />} />
          <Route
            path="/withdraw"
            element={<WithdrawCrypto setShared={setShared} />}
          />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/history" element={<CryptoHistory />} />
          <Route path="/dashboard" element={<Dashboard shared={shared} />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
