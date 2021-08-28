import React, { useState, useEffect } from "react";
import { commerce } from "./Commerce";
import "../assets/css/shoppingcart.css";
import Cart from "./Cart";

const ShoppingCart = () => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(state);

  useEffect(async () => {
    await commerce.cart.retrieve().then((cart) => {
      setState(cart);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {`${state.total_unique_items} items`}
              </div>
            </div>
          </div>
          {state.line_items.map((item) => {
            <Cart item={item} key={item.id} />;
          })}
          <div className="back-to-shop">
            <a href="#">&leftarrow;</a>
            <span className="text-muted">Back to shop</span>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: "0" }}>
              {`${state.total_unique_items} items`}
            </div>
            <div className="col text-right">&euro; 132.00</div>
          </div>
          <form>
            <p>SHIPPING</p>{" "}
            <select>
              <option className="text-muted">
                Standard-Delivery- &euro;5.00
              </option>
            </select>
            <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
          </form>
          <div
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">{`${state.subtotal.formatted_with_symbol}`}</div>
          </div>{" "}
          <button className="btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
