import React from "react";

import About from "./components/about/About";
import Features from "./components/features";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing";
import MintChecker from "./components/mintChecker";
import Navbar from "./components/navbar";
import Partner from "./components/partner/Partner";
import Try from "./components/try/Try";
import Winner from "./components/winners/Winner";

import "./App.css";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Landing />
      <MintChecker />
      <Features />
      <Try />
      <Winner />
      <About />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
