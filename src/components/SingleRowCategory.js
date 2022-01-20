import React, { useEffect } from "react";
import { getAllProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import "../styles/Home.scss";
import { BsArrowRightCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import "../styles/SingleRowCategory.scss";
const SingleRowCategory = ({ categoryName }) => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="category_box">
      <div className="single_products_container">
        {getProducts.length > 0 || getProducts !== "no Product" ? (
          getProducts
            .filter((item) => item.category === categoryName)
            .splice(0, 4)
            .map((el) => <SingleProduct key={el._id} el={el} />)
        ) : (
          <p>There is No Product</p>
        )}
      </div>
      <Link className="show_all_link" to={`/allCategories/${categoryName}`}>
        <p>Show All</p>
        <BsArrowRightCircleFill className="icon_plus" />
      </Link>
    </div>
  );
};

export default SingleRowCategory;
