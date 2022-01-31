import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addTomyCart, getSingleProduct } from "../actions/ProductAction";
import { BsFillCartPlusFill, BsFillPlusCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import "../styles/DynamicProduct.scss";
import Title from "../components/Title";
const DynamicProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getProduct = useSelector((state) => state.singleProductReducer.product);
  console.log(getProduct);
  const addToCart = () => {
    dispatch(addTomyCart(getProduct));
  };
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);

  return (
    <div className="dynamic_product_container">
      {getProduct !== null ? (
        <>
          <div className="dynamic_product_link_list">
            <span>AllCategory</span>
            <span>
              <MdArrowForwardIos className="dynamic_product_icon" />
            </span>
            <span>
              <Link to={`/allCategories/${getProduct.category}`}>
                {getProduct.category.split("")[0].toUpperCase() +
                  getProduct.category.split("").splice(1).join("")}
              </Link>
            </span>
            <span>
              <MdArrowForwardIos className="dynamic_product_icon" />
            </span>
            <span>{getProduct.name}</span>
          </div>
          <div className="dynamic_product_box">
            <div className="dynamic_product_image_info">
              <div className="dynamic_product_img">
                <img src={getProduct.image} alt={getProduct.name} />
              </div>
              <div className="dynamic_page_info">
                <ul>
                  <li>
                    Name : <span>{getProduct.name}</span>
                  </li>
                  <li>
                    Description : <span>{getProduct.description}</span>
                  </li>
                  <li>
                    Price : <span>${getProduct.price}</span>
                  </li>
                  <li>
                    Category :{" "}
                    <Link to={`/allCategories/${getProduct.category}`}>
                      {getProduct.category.split("")[0].toUpperCase() +
                        getProduct.category.split("").slice(1).join("")}
                    </Link>
                  </li>
                  <li className="li_add_to_cart_container">
                    {" "}
                    <button data-name="btn" onClick={addToCart}>
                      <span>Add To Cart</span>
                      <BsFillCartPlusFill className="add_cart_product_icon" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dynamic_product_features">
              <Title title="Features" />
              {getProduct.features.map((el, index) => (
                <div className="dynamic_product_single_feature" key={index}>
                  <BsFillPlusCircleFill className="dynamic_product_plus_icon" />
                  <li>{el}</li>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <li>Loading . . .</li>
      )}
    </div>
  );
};

export default DynamicProduct;
