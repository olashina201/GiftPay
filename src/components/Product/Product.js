import React from "react";
import "./product.css";

function Product({ product, addToCart }) {
  console.log("product", product);

  return (
    <div className="products">
      <div className="container">
        <h1 className="lg-title">Special products with offer</h1>
        <div className="product-items">
          {/* <!-- single product --> */}
          {product.map((products) => (
            <div className="product" key={products.id}>
              <div className="product-content">
                <div className="product-img">
                  <img src={products.media.source} alt="product image" />
                </div>
                <div className="product-btns">
                  <button
                    type="button"
                    className="btn-cart"
                    onClick={() => {
                      addToCart(products.id, 1);
                    }}
                  >
                    add to cart
                    <span>
                      <i className="fas fa-plus"></i>
                    </span>
                  </button>
                  <button type="button" className="btn-buy">
                    Buy now
                    <span>
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-info-top">
                  <h2 className="sm-title">{products.name}</h2>
                  <div className="rating">
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                </div>
                <a href="#" className="product-name">
                  {products.name}
                </a>
                <p className="product-price">$2,223.00</p>
                <p className="product-price">
                  {products.price.formatted_with_symbol}
                </p>
              </div>
              <div className="off-info">
                <h2 className="sm-title">25% off</h2>
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
