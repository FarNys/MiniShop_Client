import React, { useEffect } from "react";
import { getAllProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import "../styles/Home.scss";
import { compose } from "redux";
import Title from "../components/Title";
const Home = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.productReducer.products);
  // const comps = [];
  // let z = 5;
  // for (let i = 0; i < z; i++) {
  //   comps.push(<li key={i}>{i}</li>);
  // }
  // console.log(getProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="home_container">
      <h1>Header section</h1>
      <div className="gaming_category_container">
        <Title title="Gaming" />
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
      <div className="laptops_category_container">
        <Title title="Laptops" />
        <div className="single_products_container">
          {getProducts.length > 0 || getProducts !== "no Product" ? (
            getProducts
              .filter((item) => item.category === "laptops")
              .map((el) => <SingleProduct key={el._id} el={el} />)
          ) : (
            <p>There is No Product</p>
          )}
        </div>
      </div>
      <div className="camera_category_container">
        <Title title="Camera" />
        <div className="single_products_container">
          {getProducts.length > 0 || getProducts !== "no Product" ? (
            getProducts
              .filter((item) => item.category === "camera")
              .map((el) => <SingleProduct key={el._id} el={el} />)
          ) : (
            <p>There is No Product</p>
          )}
        </div>
      </div>
      {/* {comps} */}
    </div>
  );
};

export default Home;
