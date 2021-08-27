import React, { useState, useEffect } from "react";
import { commerce } from "../components/Commerce";
import About from "../components/About/About";
import Trending from "../components/Trending/Trending";
import Discount from "../components/Discount/Discount";
import Product from "../components/Product/Product";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";

const Home = () => {
  

  return (
    <>
      <NavBar allCart={fetchCart} cart={cart} />
      <About />
      <Trending />
      <Discount />
      <Product addToCart={addToCart} cart={cart} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
