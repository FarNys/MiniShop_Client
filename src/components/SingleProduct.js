import React from "react";
import "../styles/SingleProduct.scss";
import { useDispatch } from "react-redux";
import { addTomyCart } from "../actions/ProductAction";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleProduct = ({ el }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addTomyCart(el));
  };
  const checkBtn = (e) => {
    if (e.target.getAttribute("data-name") === "btn") {
      e.preventDefault();
      console.log("Dont Go");
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
        <LazyLoadImage src={el.image} alt={el.name} />
      </div>
      <div className="single_product_info">
        <li>{el.name}</li>
      </div>
      <div className="single_product_btn_price">
        <li>${el.price}</li>
        <button data-name="btn" onClick={addToCart}>
          <span>Add To Cart</span>
          <BsFillCartPlusFill className="add_cart_product_icon" />
        </button>
      </div>
    </Link>
  );
};

export default SingleProduct;
