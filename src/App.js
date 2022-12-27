import React from "react";

import Features from "./components/features";
import Landing from "./components/landing";
import MintChecker from "./components/mintChecker";
import Navbar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Landing />
      <MintChecker />
      <Features />
    </div>
  );
}

export default App;
