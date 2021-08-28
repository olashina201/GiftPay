import React from "react";

function Testimony() {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container">
          <h2>Testimonial</h2>
        </div>
      </div>

      <div className="container">
        <div className="client_container layout_padding2">
          <div className="client_box b-1">
            <div className="client-id">
              <div className="img-box">
                <img src="images/client-1.png" alt="" />
              </div>
              <div className="name">
                <h5>Magna</h5>
                <p>Consectetur adipiscing</p>
              </div>
            </div>
            <div className="detail">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrudLorem ipsum
              </p>
              <div>
                <div className="arrow_img"></div>
              </div>
            </div>
          </div>
          <div className="client_box b-2">
            <div className="client-id">
              <div className="img-box">
                <img src="images/client-2.png" alt="" />
              </div>
              <div className="name">
                <h5>Aliqua</h5>
                <p>Consectetur adipiscing</p>
              </div>
            </div>
            <div className="detail">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrudLorem ipsum
              </p>
              <div>
                <div className="arrow_img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
