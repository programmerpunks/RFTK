import React from "react";

import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Partner from "./components/partner/Partner";
import Try from "./components/try/Try";
import Winner from "./components/winners/Winner";

function App() {
  return (
    <div className="bg-slate-700">
      <Try />
      <Winner />
      <About />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
