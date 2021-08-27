import React from "react";
import t1 from "../../assets/images/t-1.jpg";
import t2 from "../../assets/images/t-2.jpg";
import t3 from "../../assets/images/t-3.jpg";
import t4 from "../../assets/images/t-4.jpg";

function Trending() {
  return (
    <section className="trending_section layout_padding">
      <div id="accordion">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Trending Categories</h2>
                </div>
                <div className="tab_container">
                  <div
                    className="t-link-box"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div className="number">
                      <h5>01</h5>
                    </div>
                    <hr />
                    <div className="t-name">
                      <h5>Laptops and Accessories</h5>
                    </div>
                  </div>
                  <div
                    className="t-link-box collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div className="number">
                      <h5>02</h5>
                    </div>
                    <hr />
                    <div className="t-name">
                      <h5>Phones and Accessories</h5>
                    </div>
                  </div>
                  <div
                    className="t-link-box collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div className="number">
                      <h5>03</h5>
                    </div>
                    <hr />
                    <div className="t-name">
                      <h5>televisions</h5>
                    </div>
                  </div>
                  <div
                    className="t-link-box collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <div className="number">
                      <h5>04</h5>
                    </div>
                    <hr />
                    <div className="t-name">
                      <h5>Others</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="collapse show"
                id="collapseOne"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="img_container ">
                  <div className="box b-1">
                    <div className="img-box">
                      <img src={t1} alt="" />
                    </div>
                    <div className="img-box">
                      <img src={t2} alt="" />
                    </div>
                  </div>
                  <div className="box b-2">
                    <div className="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div className="img-box">
                      <img src={t4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="collapse"
                id="collapseTwo"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="img_container ">
                  <div className="box b-1">
                    <div className="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div className="img-box">
                      <img src={t4} alt="" />
                    </div>
                  </div>
                  <div className="box b-2">
                    <div className="img-box">
                      <img src={t1} alt="" />
                    </div>
                    <div className="img-box">
                      <img src={t2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="collapse"
                id="collapseThree"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="img_container ">
                  <div className="box b-1">
                    <div className="img-box">
                      <img src={t4} alt="" />
                    </div>
                    <div className="img-box">
                      <img src={t1} alt="" />
                    </div>
                  </div>
                  <div className="box b-2">
                    <div className="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div className="img-box">
                      <img src={t2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="collapse"
                id="collapseFour"
                aria-labelledby="headingfour"
                data-parent="#accordion"
              >
                <div className="img_container ">
                  <div className="box b-1">
                    <div className="img-box">
                      <img src={t1} alt="" />
                    </div>

                    <div className="img-box">
                      <img src={t4} alt="" />
                    </div>
                  </div>
                  <div className="box b-2">
                    <div className="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div className="img-box">
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
