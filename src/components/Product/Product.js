import React from "react";
import "./product.css";
import item from "../../images/laptop1.png";

function Product() {
  return (
    <div class="products">
            <div class="container">
                <h1 class="lg-title">Special products with offer</h1>
                <p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit mollitia, et vero accusantium dolor repudiandae dolorem facere alias hic quia ipsa ipsum deleniti, eos perspiciatis quae iste maiores. Possimus?</p>
                <div class="product-items">
                    {/* <!-- single product --> */}
                    <div class="product">
                        <div class="product-content">
                            <div class="product-img">
                                <img src={item} alt="product image" />
                            </div>
                            <div class="product-btns">
                                <button type="button" class="btn-cart">add to cart
                                    <span><i class="fas fa-plus"></i></span>
                                </button>
                                <button type="button" class="btn-buy">Buy now
                                    <span><i class="fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-info-top">
                                <h2 class="sm-title">Computers</h2>
                                <div class="rating">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href="#" class="product-name">Hp Laptop Core i5 1TB</a>
                            <p class="product-price">$2,223.00</p>
                            <p class="product-price">$1,223.00</p>
                        </div>
                        <div class="off-info">
                            <h2 class="sm-title">25% off</h2>
                        </div>
                    </div>
                    {/* <!-- end of single product -->
                    <!-- single product --> */}
                    <div class="product">
                        <div class="product-content">
                            <div class="product-img">
                                <img src={item} alt="product image" />
                            </div>
                            <div class="product-btns">
                                <button type="button" class="btn-cart">add to cart
                                    <span><i class="fas fa-plus"></i></span>
                                </button>
                                <button type="button" class="btn-buy">Buy now
                                    <span><i class="fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-info-top">
                                <h2 class="sm-title">Fashion</h2>
                                <div class="rating">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href="#" class="product-name">Women Shoe</a>
                            <p class="product-price">$30.00</p>
                            <p class="product-price">$20.00</p>
                        </div>
                        <div class="off-info">
                            <h2 class="sm-title">10% off</h2>
                        </div>
                    </div>
                    {/* <!-- end of single product -->
                    <!-- single product --> */}
                    <div class="product">
                        <div class="product-content">
                            <div class="product-img">
                                <img src={item} alt="product image"/>
                            </div>
                            <div class="product-btns">
                                <button type="button" class="btn-cart">add to cart
                                    <span><i class="fas fa-plus"></i></span>
                                </button>
                                <button type="button" class="btn-buy">Buy now
                                    <span><i class="fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-info-top">
                                <h2 class="sm-title">Fashion</h2>
                                <div class="rating">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href="#" class="product-name">Adidas Shoe</a>
                            <p class="product-price">$120.00</p>
                            <p class="product-price">$60.00</p>
                        </div>
                        <div class="off-info">
                            <h2 class="sm-title">25% off</h2>
                        </div>
                    </div>
                    {/* <!-- end of single product -->
                    <!-- single product --> */}
                    <div class="product">
                        <div class="product-content">
                            <div class="product-img">
                                <img src={item} alt="product image" />
                            </div>
                            <div class="product-btns">
                                <button type="button" class="btn-cart">add to cart
                                <span><i class="fas fa-plus"></i></span>
                            </button>
                                <button type="button" class="btn-buy">Buy now
                                <span><i class="fas fa-shopping-cart"></i></span>
                            </button>
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-info-top">
                                <h2 class="sm-title">Computers</h2>
                                <div class="rating">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href="#" class="product-name">Hp Laptop Core i7 with Pen Touch</a>
                            <p class="product-price">$3000.00</p>
                            <p class="product-price">$2500.00</p>
                        </div>
                        <div class="off-info">
                            <h2 class="sm-title">25% off</h2>
                        </div>
                    </div>
                    {/* <!-- end of single product --> */}
                </div>
            </div>
        </div>
  );
}

export default Product;
