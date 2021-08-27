import React, { useState, useEffect } from "react";
import { commerce } from "../components/Commerce";
import Header from "../components/Hero/Header";
import About from "../components/About/About";
import Trending from "../components/Trending/Trending";
import Discount from "../components/Discount/Discount";
import Product from "../components/Product/Product";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [fetchCart, setFetchCart] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProduct((response && response.data) || []);
  };

  const fetchCarts = async () => {
    const response = await commerce.cart.retrieve();
    setFetchCart(response);
  };

  const addToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response);
    console.log(cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCarts();
  }, []);

  return (
    <>
      <Header cart={fetchCart} />
      <About />
      <Trending />
      <Discount />
      <Product product={product} addToCart={addToCart} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
