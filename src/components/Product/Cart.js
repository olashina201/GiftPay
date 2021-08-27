import React from "react";
import ShoppingCart from "./ShoppingCart";

function Cart({ allCart }) {
  console.log("cart", allCart.line_items);
  // const renderEmptyCart = () => {
  //   if (allCart.total_unique_items > 0) {
  //     return;
  //   }

  //   return (
  //     <p className="cart__none">
  //       You have no items in your shopping cart, start adding some!
  //     </p>
  //   );
  // };

  // const renderCart = () => {
  //   if (allCart.total_unique_items === 0) {
  //     return;
  //   }
  //   return (
  //     <>
  //       {allCart.line_items.map((lineItem) => (
  //         <CartItem item={lineItem} key={lineItem.id} className="cart__inner" />
  //       ))}
  //       <div className="cart__total">
  //         <p className="cart__total-title">Subtotal:</p>
  //         <p className="cart__total-price">
  //           {allCart.subtotal.formatted_with_symbol}
  //         </p>
  //       </div>
  //     </>
  //   );
  // };
  return (
    <>
      {allCart.line_items.map((lineItem) => (
        <ShoppingCart
          item={lineItem}
          key={lineItem.id}
          className="cart__inner"
        />
      ))}
    </>
  );
}

export default Cart;
