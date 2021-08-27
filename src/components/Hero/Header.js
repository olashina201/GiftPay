import React from "react";
import NavBar from "../Navbar/NavBar";
import Slider from "../Hero/Slider";

function Header({ allCart, cart }) {
  return (
    <div className="hero_area">
      <NavBar allCart={allCart} cart={cart} />
      <Slider />
    </div>
  );
}

export default Header;
