import React from "react";
import "./App.css";
import "./index.css";
import Home from "./Home";
import About from "./About";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import ProductHome from "./ProductHome";

function NotFound() {
  return (
    <div>
      <span style={{ color: "red" }}>Page Not Found</span>
    </div>
  );
}
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Welcome to My App </h1>
      <div>
        <Link to="/">Home</Link> <Link to="about">About</Link>{" "}
        <Link to="products">Products</Link>{" "}
        <Link to="products/mobile">Mobile</Link>{" "}
        <Link to="products/laptop">laptop</Link>
        <button
          onClick={() => {
            navigate("/about");
          }}
        >
          See About Page
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="products" element={<Product />}>
          <Route path="/" element={<ProductHome />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
