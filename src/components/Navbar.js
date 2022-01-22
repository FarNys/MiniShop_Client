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
  //LIGHT/DARK MODE HANDLER
  // const changeModeHandler = () => {
  //   var getColor = getComputedStyle(document.documentElement).getPropertyValue(
  //     "--color_1"
  //   );
  //   if (getColor === " #fff") {
  //     document.documentElement.style.setProperty("--color_1", "#232526");
  //     document.documentElement.style.setProperty("--color_2", " #fff");
  //   } else {
  //     document.documentElement.style.setProperty("--color_1", " #fff");
  //     document.documentElement.style.setProperty("--color_2", "#232526");
  //   }
  // };
  return (
    <div>
      <ul className="navbar_container">
        <li>{/* <button onClick={changeModeHandler}>Dark/Light</button> */}</li>
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
          <Link to="/cart" aria-label="Cart Page">
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
      </ul>
    </div>
  );
};

export default Navbar;
