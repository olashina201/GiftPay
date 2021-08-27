import React from "react";
import NavBar from "../Navbar/NavBar";
import Slider from "../Hero/Slider";

function Header({ cart }) {
  return (
    <div className="hero_area">
      <NavBar cart={cart} />
      <Slider />
    </div>
  );
}

export default Header;
