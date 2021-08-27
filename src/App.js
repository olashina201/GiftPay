import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Abouts from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Product from "./components/Product/Product";
import ShoppingCart from "./components/Product/ShoppingCart";
import { commerce } from "./components/Commerce";
import NavBar from "./components/Navbar/NavBar";
import Trending from "./components/Trending/Trending";
import Footer from "./components/Footer/Footer";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [fetchCart, setFetchCart] = useState([]);
  console.log("cart", fetchCart.line_items);
  console.log("products", product);

  const fetchCarts = async () => {
    await commerce.cart
      .retrieve()
      .then((cart) => {
        setFetchCart(cart);
      })
      .catch((error) => {
        console.log("There was an error fetching the cart", error);
      });
  };

  const addToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response);
  };

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProduct((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
    fetchCarts();
  }, []);
  return (
    <Router>
      <NavBar allCart={fetchCart} cart={cart} />
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        <Route
          path="/cart"
          component={() => <ShoppingCart allCart={fetchCart.line_items} />}
        />
        <Route exact path="/about" component={Abouts} />
        <Route exact path="/trend" component={Trending} />
        <Route
          exact
          path="/products"
          component={() => <Product product={product} addToCart={addToCart} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
