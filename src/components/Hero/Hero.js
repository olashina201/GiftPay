import React from "react";
import item from "../../images/laptop1.png";
import "./hero.css";

function Hero() {
  return (
    <header>
      <article>
        <h1>Shopping made simple</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          reprehenderit mollitia, et vero accusantium dolor repudiandae dolorem
          facere alias hic quia ipsa ipsum deleniti, eos perspiciatis quae iste
          maiores. Possimus?
        </p>
        {/* <div class="buttons">
          <button class="chrome">Get it on Chrome</button>
          <button class="firefox">Get it on Firefox</button>
        </div> */}
      </article>
      <div class="images">
        <img src={item} alt="homescreen image" class="hero-image" />
        <div class="blue-bg-r"></div>
      </div>
    </header>
  );
}

export default Hero;
