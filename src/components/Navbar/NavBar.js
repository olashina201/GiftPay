import React, { useState } from "react";
import logo from "../../assets/images/giftpay.png";
import user from "../../assets/images/shopping-cart.png";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
// import Cart from "../Product/Cart";

function NavBar({ cart }) {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className={navbar ? "navbar-toggler" : "navbar-toggler collapsed"}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={navbar ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setNavbar(!navbar)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              navbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse lg_nav-toggle"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {" "}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Product{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact us
                </a>
              </li>
            </ul>
            <div className="user_option">
              <a href="/cart">
                <img src={user} alt="" />
                <span>{cart}</span>
              </a>
              {/* <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                ></button>
              </form> */}
            </div>
          </div>
          {/* <div>
            <div className="custom_menu-btn ">
              <button>
                <span className=" s-1"></span>
                <span className="s-2"></span>
                <span className="s-3"></span>
              </button>
            </div>
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
