import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  return (
    <div>
      <h1>Details of product : {productId}</h1>
    </div>
  );
}

export default ProductDetails;
