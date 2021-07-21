import React from "react";
import about from "../../assets/images/about-img.png";

function About() {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Us</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
