import React, { useState, useEffect } from 'react'
import { commerce } from "./components/Commerce";
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/index";
import About from './components/About/About';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Product from "./components/Product/Product";
import Slider from "./components/Hero/Slider";

function App() {
  
  return (
    <Router>
      <Home />
      <Switch>
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
