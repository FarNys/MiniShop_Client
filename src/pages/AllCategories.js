import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getAllProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import "../styles/SingleProduct.scss";

const AllCategories = () => {
  const dispatch = useDispatch();
  //GET ALL PRODUCTS FROM STORE
  const getProducts = useSelector((state) => state.productReducer.products);
  // console.log(getProducts);
  const { category } = useParams();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="single_products_container">
      {getProducts.length > 0 &&
        getProducts
          .filter((el) => el.category === category)
          .map((el) => <SingleProduct key={el._id} el={el} />)}
    </div>
  );
};

export default AllCategories;
