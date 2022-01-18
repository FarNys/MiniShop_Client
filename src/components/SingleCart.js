import React, { useEffect, useState } from "react";
import { counterHandler, deleteFromCart } from "../actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
const SingleCart = ({ el }) => {
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
    <div style={{ display: "flex" }}>
      <p style={{ marginRight: "5px" }}>{el.item.name}</p>
      <p>{el.item.price}$</p>
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
      <p>{el.item.price * counter}$</p>
      <button onClick={deleteCart}>Remove</button>
    </div>
  );
};

export default SingleCart;
