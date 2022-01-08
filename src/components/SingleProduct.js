import React from "react";
import "../styles/SingleProduct.scss";
import { useDispatch } from "react-redux";
import { addTomyCart } from "../actions/ProductAction";
const SingleProduct = ({ el }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addTomyCart(el));
  };
  return (
    <div className="single_product_box" onClick={addToCart}>
      <div className="single_product_image_box">
        <img src={el.image} alt={el.name} />
      </div>
      <div className="single_product_info">
        <li>{el.name}</li>
        <li>{el.price}$</li>
      </div>
    </div>
  );
};

export default SingleProduct;
