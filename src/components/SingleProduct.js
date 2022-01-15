import React from "react";
import "../styles/SingleProduct.scss";
import { useDispatch } from "react-redux";
import { addTomyCart } from "../actions/ProductAction";
import { Link } from "react-router-dom";

const SingleProduct = ({ el }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addTomyCart(el));
  };
  const checkBtn = (e) => {
    if (e.target.getAttribute("data-name") === "btn") {
      e.preventDefault();
    } else {
      console.log("Go");
    }
  };
  return (
    <Link
      className="single_product_box"
      to={`/product/${el._id}`}
      onClick={checkBtn}
    >
      <div className="single_product_image_box">
        <img src={el.image} alt={el.name} />
      </div>
      <div className="single_product_info">
        <li>{el.name}</li>
        <li>{el.price}$</li>
      </div>
      <div className="single_product_btn">
        <button data-name="btn" onClick={addToCart}>
          Add
        </button>
      </div>
    </Link>
  );
};

export default SingleProduct;
