import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import Abouts from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Product from "./components/Product/Product";
import ShoppingCart from "./components/Product/ShoppingCart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/about" component={Abouts} />
        <Route exact path="/products" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
