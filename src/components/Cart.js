import React from "react";

const Cart = ({ item, updateCartQty, removeCart }) => {
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={item.media.source} />
        </div>
        <div className="col">
          <div className="row text-muted">{item.name}</div>
          <div className="row">{item.name}</div>
        </div>
        <div className="col">
          {" "}
          <button onClick={() => updateCartQty(item.id, item.quantity - 1)}>
            -
          </button>
          <a href="#" className="border">
            {item.quantity}
          </a>
          <button
            onClick={() => {
              updateCartQty(item.id, item.quantity + 1);
            }}
          >
            +
          </button>{" "}
        </div>
        <div className="col">
          {item.price.formatted_with_code}
          <button
            className="close"
            onClick={() => {
              removeCart(item.id);
            }}
          >
            &#10005;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
