import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Abouts from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Product from "./components/Product/Product";
import { commerce } from "./components/Commerce";
import NavBar from "./components/Navbar/NavBar";
import Trending from "./components/Trending/Trending";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  // const updateCartQty = async (productId, quantity) => {
  //   const { cart } = await commerce.cart.update(productId, { quantity });
  //   setCart(cart);
  // };

  // const removeCart = async (productId) => {
  //   const { cart } = await commerce.cart.remove(productId);
  //   setCart(cart);
  // };

  // const emptyCart = async () => {
  //   const { cart } = await commerce.cart.empty();
  //   setCart(cart);
  // };

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProduct((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Router>
      <NavBar allCart={cart} cart={cart.total_items} />
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        <Route
          exact
          path="/cart"
          component={() => <ShoppingCart cart={cart} />}
        />
        <Route exact path="/about" component={Abouts} />
        <Route exact path="/trend" component={Trending} />
        <Route
          exact
          path="/products"
          component={() => (
            <Product product={product} addToCart={addToCart} cart={cart} />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
