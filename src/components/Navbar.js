import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
//ICONS START
import { FaGamepad, FaShoppingCart } from "react-icons/fa";
import { AiOutlineLaptop, AiFillCamera } from "react-icons/ai";
import { useSelector } from "react-redux";

//ICONS END

const Navbar = () => {
  const totalItems = useSelector(
    (state) => state.cartReducer.currentCart.length
  );
  console.log(totalItems);
  return (
    <div className="navbar_container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="allcategories_navbar">
        All Category
        <ul className="all_category_ul">
          <li className="list_under">
            <Link to="/allCategories/gaming">
              <p>Gaming</p>{" "}
              <span>
                <FaGamepad />
              </span>
            </Link>
          </li>
          <li className="list_under">
            <Link to="/allCategories/laptops">
              <p>Laptops</p>
              <span>
                <AiOutlineLaptop />
              </span>
            </Link>
          </li>
          <li className="list_under">
            <Link to="/allCategories/camera">
              <p>Camera</p>
              <span>
                <AiFillCamera />
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className="cart_list_navbar">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        {totalItems !== 0 && <span>{totalItems}</span>}
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
