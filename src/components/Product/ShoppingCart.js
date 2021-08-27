import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  renderEmptyCart() {
    const { cart } = this.props;
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }

  renderCart() {
    const { cart } = this.props;
    if (cart.total_unique_items === 0) {
      return;
    }

    return (
      <>
        {cart.line_items.map((lineItem) => (
          <CartItem item={lineItem} key={lineItem.id} className="cart__inner" />
        ))}
        <div className="cart__total">
          <p className="cart__total-title">Subtotal:</p>
          <p className="cart__total-price">
            {cart.subtotal.formatted_with_symbol}
          </p>
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="cart">
        <h4 className="cart__heading">Your Shopping Cart</h4>
        {this.renderEmptyCart()}
        {this.renderCart()}
      </div>
    );
  }
}

export default Cart;
