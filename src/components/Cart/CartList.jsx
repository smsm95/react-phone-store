import React from "react";
import CartItem from "./CartItem";
const CartList = ({ value }) => {
  const { cart } = value;

  return (
    <div className="container-fluid">
      {cart.map(product => {
        return (
          <CartItem key={product.id} item={product} value={value}></CartItem>
        );
      })}
    </div>
  );
};

export default CartList;
