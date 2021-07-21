import React from "react";
import t1 from "../../assets/images/t-1.jpg";
import t2 from "../../assets/images/t-2.jpg";
import t3 from "../../assets/images/t-3.jpg";
import t4 from "../../assets/images/t-4.jpg";

function Trending() {
  return (
    <section class="trending_section layout_padding">
      <div id="accordion">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h2>Trending Categories</h2>
                </div>
                <div class="tab_container">
                  <div
                    class="t-link-box"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div class="number">
                      <h5>01</h5>
                    </div>
                    <hr />
                    <div class="t-name">
                      <h5>Laptops and Accessories</h5>
                    </div>
                  </div>
                  <div
                    class="t-link-box collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div class="number">
                      <h5>02</h5>
                    </div>
                    <hr />
                    <div class="t-name">
                      <h5>Phones and Accessories</h5>
                    </div>
                  </div>
                  <div
                    class="t-link-box collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div class="number">
                      <h5>03</h5>
                    </div>
                    <hr />
                    <div class="t-name">
                      <h5>televisions</h5>
                    </div>
                  </div>
                  <div
                    class="t-link-box collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <div class="number">
                      <h5>04</h5>
                    </div>
                    <hr />
                    <div class="t-name">
                      <h5>Others</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="collapse show"
                id="collapseOne"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="img_container ">
                  <div class="box b-1">
                    <div class="img-box">
                      <img src={t1} alt="" />
                    </div>
                    <div class="img-box">
                      <img src={t2} alt="" />
                    </div>
                  </div>
                  <div class="box b-2">
                    <div class="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div class="img-box">
                      <img src={t4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="collapse"
                id="collapseTwo"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="img_container ">
                  <div class="box b-1">
                    <div class="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div class="img-box">
                      <img src={t4} alt="" />
                    </div>
                  </div>
                  <div class="box b-2">
                    <div class="img-box">
                      <img src={t1} alt="" />
                    </div>
                    <div class="img-box">
                      <img src={t2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="collapse"
                id="collapseThree"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="img_container ">
                  <div class="box b-1">
                    <div class="img-box">
                      <img src={t4} alt="" />
                    </div>
                    <div class="img-box">
                      <img src={t1} alt="" />
                    </div>
                  </div>
                  <div class="box b-2">
                    <div class="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div class="img-box">
                      <img src={t2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="collapse"
                id="collapseFour"
                aria-labelledby="headingfour"
                data-parent="#accordion"
              >
                <div class="img_container ">
                  <div class="box b-1">
                    <div class="img-box">
                      <img src={t1} alt="" />
                    </div>

                    <div class="img-box">
                      <img src={t4} alt="" />
                    </div>
                  </div>
                  <div class="box b-2">
                    <div class="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div class="img-box">
                      <img src={t2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
