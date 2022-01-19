import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="allcategories_navbar">
        All Category
        <ul>
          <li>
            {" "}
            <Link to="/allCategories/gaming">Gaming</Link>
          </li>
          <li>
            {" "}
            <Link to="/allCategories/laptops">Laptops</Link>
          </li>
          <li>
            {" "}
            <Link to="/allCategories/camera">Camera</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
      <li>
        <Link to="/products">All Products</Link>
      </li>
    </div>
  );
};

export default Navbar;
