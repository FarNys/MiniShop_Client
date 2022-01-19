import React from "react";
import "../styles/Title.scss";
const Title = ({ title }) => {
  return (
    <div className="single_title_container">
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
