import React from "react";
import "./product.css";
import Item from "./Item";

function ProductList({ product, addToCart, cart }) {
  console.log("products", product);
  console.log("carts", cart);
  return (
    <div className="products">
      <div className="container">
        <h1 className="lg-title">Special products with offer</h1>
        <div className="product-items">
          {product.map((products) => (
            <Item product={products} key={products.id} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
