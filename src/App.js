import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Abouts from "./pages/about";
import Home from "./pages/index";
import Services from "./pages/services";
import ContactUs from "./pages/contact";
import Product from "./components/Product/Product";
import { commerce } from "./components/Commerce";
//import NavBar from "./components/Navbar/NavBar";
import Trending from "./components/Trending/Trending";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const updateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const removeCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    let subscribe = false;
    commerce.cart.retrieve().then((cart) => {
      if (!subscribe) {
        setCart(cart);
        setLoading(false);
      }
    });
    return () => {
      subscribe = true;
    };
  }, []);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProduct((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home product={product} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={ContactUs} />
        <Route
          exact
          path="/cart"
          component={() => (
            <ShoppingCart
              cart={cart}
              loading={loading}
              updateCartQty={updateCartQty}
              removeCart={removeCart}
              emptyCart={emptyCart}
            />
          )}
        />
        <Route exact path="/about" component={Abouts} />
        <Route exact path="/trend" component={Trending} />
        <Route
          exact
          path="/products"
          component={() => (
            <Product
              product={product}
              addToCart={addToCart}
              cart={cart.total_items}
            />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
