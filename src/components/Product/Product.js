import React from "react";
import "./product.css";
import stripHtml from "string-strip-html";

function Product({ product, addToCart }) {
  console.log("product", product);

  return (
    <div class="products">
      <div class="container">
        <h1 class="lg-title">Special products with offer</h1>
        <div class="product-items">
          {/* <!-- single product --> */}
          {product.map((products) => (
              <div class="product">
              <div class="product-content">
                <div class="product-img">
                  <img src={products.media.source} alt="product image" />
                </div>
                <div class="product-btns">
                  <button type="button" class="btn-cart" 
                  onClick={() => {
                    addToCart(products.id, 1)
                  }}>
                    add to cart
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </button>
                  <button type="button" class="btn-buy">
                    Buy now
                    <span>
                      <i class="fas fa-shopping-cart"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div class="product-info">
                <div class="product-info-top">
                  <h2 class="sm-title">{products.name}</h2>
                  <div class="rating">
                    <span>
                      <i class="fas fa-star"></i>
                    </span>
                    <span>
                      <i class="fas fa-star"></i>
                    </span>
                    <span>
                      <i class="fas fa-star"></i>
                    </span>
                    <span>
                      <i class="fas fa-star"></i>
                    </span>
                    <span>
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                </div>
                <a href="#" class="product-name">
                  {products.name}
                </a>
                <p class="product-price">$2,223.00</p>
                <p class="product-price">{products.price.formatted_with_symbol}</p>
              </div>
              <div class="off-info">
                <h2 class="sm-title">25% off</h2>
              </div>
            </div>
          ))}
          
          {/* <!-- end of single product --> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
