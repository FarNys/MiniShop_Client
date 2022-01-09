import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
    </div>
  );
};

export default Navbar;
