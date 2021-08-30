import React from "react";
import Trending from "../components/Trending/Trending";
import Discount from "../components/Discount/Discount";
import ProductList from "../components/Product/ProductList";
import Contact from "../components/Contact/Contact";
import Slider from "../components/Hero/Slider";
import NavBar from "../components/Navbar/NavBar";

const Home = ({ product, addToCart, cart }) => {
  return (
    <>
      <div className="hero_area">
        <NavBar cart={cart.total_unique_items} />
        <Slider />
      </div>
      <Discount />
      <ProductList addToCart={addToCart} product={product} />
      <Trending />
      <Contact />
    </>
  );
};

export default Home;
