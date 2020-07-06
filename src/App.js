import React from "react";
import "./App.css";
import "./index.css";
import Home from "./Home";
import About from "./About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
