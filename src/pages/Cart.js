import React from "react";
import { useSelector } from "react-redux";
import SingleCart from "../components/SingleCart";
const Cart = () => {
  const getCart = useSelector((state) => state.cartReducer.currentCart);
  console.log(getCart);
  return (
    <div className="cart_container">
      <h3>Cart</h3>
      <h4 style={{ display: "flex" }}>
        Total:
        {getCart.length > 0 ? (
          getCart.reduce((total, cur) => {
            return total + +cur.count * +cur.item.price;
          }, 0)
        ) : (
          <p>0</p>
        )}
        $
      </h4>
      {getCart.length > 0 ? (
        getCart.map((el) => <SingleCart key={el.item._id} el={el} />)
      ) : (
        <p>No Item</p>
      )}
    </div>
  );
};

export default Cart;
