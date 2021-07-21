import React from 'react';
import Header from "../components/Hero/Header";
import About from "../components/About/About";
import Trending from "../components/Trending/Trending";
import Discount from "../components/Discount/Discount";
import Product from "../components/Product/Product";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Trending />
      <Discount />
      <Product />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
