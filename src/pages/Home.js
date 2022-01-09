import React, { useEffect } from "react";
import { getAllProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import "../styles/Home.scss";
const Home = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.productReducer.products);
  const x = [];
  console.log(getProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="home_container">
      <h1>Header</h1>
      <h3>Gaming</h3>
      <div className="single_products_container">
        {getProducts.length > 0 || getProducts !== "no Product" ? (
          getProducts
            .filter((item) => item.category === "gaming")
            .map((el) => <SingleProduct key={el._id} el={el} />)
        ) : (
          <p>There is No Product</p>
        )}
      </div>
    </div>
  );
};

export default Home;
