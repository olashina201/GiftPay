import React from "react";
import discount from "../../assets/images/discount-img.png";

function Discount() {
  return (
    <section class="discount_section  layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="detail-box">
              <h2>The Latest Collection</h2>
              <h2 class="main_heading">50% DISCOUNT</h2>

              <div class="">
                <a href="">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="img-box">
              <img src={discount} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
