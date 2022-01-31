import React from "react";
import { useSelector } from "react-redux";
import SingleCart from "../components/SingleCart";
import Title from "../components/Title";
import "../styles/Cart.scss";
const Cart = () => {
  const getCart = useSelector((state) => state.cartReducer.currentCart);
  console.log(getCart);
  return (
    <div className="cart_container">
      <Title title="Cart" />
      <div className="cart_items_container">
        <div className="cart_row_container cart_row_header">
          <p className="cart_index">#</p>
          <p>Name</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total Price</p>
          <p>Delete</p>
        </div>
        {getCart.length > 0 ? (
          getCart.map((el, index) => (
            <SingleCart key={el.item._id} el={el} index={index} />
          ))
        ) : (
          <ul>
            <li>No Item</li>
          </ul>
        )}
      </div>
      <div className="cart_total_container_outer">
        <div className="cart_total_container">
          <h2>
            Total:
            <span>
              {getCart.length > 0
                ? getCart.reduce((total, cur) => {
                    return total + +cur.count * +cur.item.price;
                  }, 0)
                : 0}
              $
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
