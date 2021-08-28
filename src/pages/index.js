import React from "react";
import Trending from "../components/Trending/Trending";
import Discount from "../components/Discount/Discount";
import Product from "../components/Product/Product";
import Contact from "../components/Contact/Contact";

const Home = ({ product, addToCart }) => {
  return (
    <>
      <Discount />
      <Product addToCart={addToCart} product={product} />
      <Trending />
      <Contact />
    </>
  );
};

export default Home;
