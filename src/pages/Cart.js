import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const getCart = useSelector((state) => state.cartReducer);
  console.log(getCart);
  return <div>This Is Cart</div>;
};

export default Cart;
