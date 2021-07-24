import React from "react";
import NavBar from "../Navbar/NavBar";
import Slider from "../Hero/Slider";

function Header({cart}) {
  return (
    <div class="hero_area">
      <NavBar cart={cart} />
      <Slider />
    </div>
  );
}

export default Header;
