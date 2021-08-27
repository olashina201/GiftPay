import React from "react";

const Item = ({ product, addToCart }) => {
  return (
    <div className="product" key={product.id}>
      <div className="product-content">
        <div className="product-img">
          <img src={product.media.source} alt="product image" />
        </div>
        <div className="product-btns">
          <button
            type="button"
            className="btn-cart"
            onClick={() => {
              addToCart(product.id, 1);
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
          <h2 className="sm-title">{product.name}</h2>
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
          {product.name}
        </a>
        <p className="product-price">$2,223.00</p>
        <p className="product-price">{product.price.formatted_with_symbol}</p>
      </div>
      <div className="off-info">
        <h2 className="sm-title">25% off</h2>
      </div>
    </div>
  );
};

export default Item;
