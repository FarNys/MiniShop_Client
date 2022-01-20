import React from "react";
import "../styles/Home.scss";
import Title from "../components/Title";
import SingleRowCategory from "../components/SingleRowCategory";

const Home = () => {
  return (
    <div className="home_container">
      <h1>Header section</h1>
      <div className="category_container_home">
        <Title title="Gaming" />
        <SingleRowCategory categoryName="gaming" />
      </div>
      <div className="category_container_home">
        <Title title="Laptops" />
        <SingleRowCategory categoryName="laptops" />
      </div>
      <div className="category_container_home">
        <Title title="Camera" />
        <SingleRowCategory categoryName="camera" />
      </div>
    </div>
  );
};

export default Home;
