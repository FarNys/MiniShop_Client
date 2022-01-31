import React, { useEffect, useState } from "react";
import { counterHandler, deleteFromCart } from "../actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";

const SingleCart = ({ el, index }) => {
  const dispatch = useDispatch();
  const [counter, setcounter] = useState(1);
  const countHandler = (e) => {
    setcounter(e.target.value);
    dispatch(counterHandler(el.item, e.target.value));
  };
  const deleteCart = () => {
    dispatch(deleteFromCart(el.item._id));
  };
  return (
    <div className="cart_row_container">
      <p className="cart_index">{index + 1}</p>
      <p>{el.item.name}</p>
      <p>
        <select name="count" id="count" onChange={countHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </p>

      <p>{el.item.price}$</p>

      <p>{el.item.price * counter}$</p>
      <p>
        <button
          onClick={deleteCart}
          aria-label="Delete From Cart"
          className="delete_add_to_cart"
        >
          <FaTrash />
        </button>
      </p>
    </div>
  );
};

export default SingleCart;
