import React from "react";
import Trending from "../components/Trending/Trending";
import Discount from "../components/Discount/Discount";
import Product from "../components/Product/Product";
import Contact from "../components/Contact/Contact";
import Slider from "../components/Hero/Slider";
import NavBar from "../components/Navbar/NavBar";

const Home = ({ product, addToCart, cart }) => {
  return (
    <>
      <div className="hero_area">
        <NavBar cart={cart.total_items} />
        <Slider />
      </div>
      <Discount />
      <Product addToCart={addToCart} product={product} />
      <Trending />
      <Contact />
    </>
  );
};

export default Home;
