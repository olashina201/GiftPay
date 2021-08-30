import React from "react";
import NavBar from "../Navbar/NavBar";
import "./checkout.scss";

const Checkout = () => {
  return (
    <>
      <NavBar />
      <section className="contact_section layout_padding">
        <div className="container ">
          <div className="heading_container">
            <h2 className="">Checkout</h2>
          </div>
        </div>
        <div className="container">
          <form action="">
            <div className="row col-md-12">
              <div className="col-md-6">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Shipping Address"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <input type="text" placeholder="Card holder name" />
                </div>
                <div>
                  <input type="number" placeholder="Card Number" />
                </div>
                <div>
                  <input type="number" placeholder="expiry date" />
                </div>
                <div>
                  <input type="number" placeholder="cvv" />
                </div>
                <div className="d-flex ">
                  <button>Pay</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
