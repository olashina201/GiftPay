import React from "react";

const Cart = ({ item }) => {
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={item.media.source} />
        </div>
        <div className="col">
          <div className="row text-muted">{item.name}</div>
          <div className="row">Cotton T-shirt</div>
        </div>
        <div className="col">
          {" "}
          <a href="#">-</a>
          <a href="#" className="border">
            1
          </a>
          <a href="#">+</a>{" "}
        </div>
        <div className="col">
          &euro; 44.00 <span className="close">&#10005;</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
