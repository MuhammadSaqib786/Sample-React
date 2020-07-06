import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Product</h1>
      <hr />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Product;
