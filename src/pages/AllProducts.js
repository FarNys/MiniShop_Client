import React, { useEffect, useState } from "react";
import { getAllProducts, sortProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import SingleEdit from "../components/SingleEdit";
import "../styles/AllProducts.scss";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

//IMPORT FROM MUI TO BUILD DROPDOWN
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//IMPORT FROM MUI TO BUILD DROPDOWN

const AllProducts = () => {
  const [test, settest] = useState(false);
  const [category, setcategory] = useState("all");
  //INDEX NUMBER FOR SHOW
  const [index, setindex] = useState(0);
  const dispatch = useDispatch();
  //GET ALL PRODUCTS FROM STORE
  const allProducts = useSelector((state) => state.productReducer.products);
  //EVERY CATEGORIES LENGTH
  const [catLength, setcatLength] = useState(0);
  //CREATE NEW SET OF CATEGORIES
  const getAllCategory = allProducts.map((el) => el.category);
  const allCategory = [...new Set(getAllCategory)];
  //HANDLE CATEGORY
  const handleChange = (event) => {
    setcategory(event.target.value);
  };
  //GET ALL PRODUCTS FROM DB
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  //INITIAL VALUE FOR PRODUC INDEX AND PAGING
  useEffect(() => {
    if (category === "all") {
      setcatLength(allProducts.length);
    } else {
      setcatLength(
        allProducts.filter((item) => item.category === category).length
      );
    }
  }, [allProducts, category]);
  //CHANGE INDEX HANDLER
  const prevHandler = () => {
    if (index !== 0) {
      setindex(index - 9);
    }
  };
  //CHANGE INDEX HANDLER
  const nextHandler = () => {
    if (index + 9 < catLength) {
      setindex(index + 9);
    }
  };
  if (allProducts.length === 0) {
    return <div>Loading . . .</div>;
  }
  //SORT HANDLER FUNCTION
  const sortHandler = () => {
    console.log("Sort");
    dispatch(sortProducts(test, "price"));
    settest(!test);
    console.log(allProducts);
  };

  return (
    <div className="allproducts_container">
      <div className="select_category_container">
        <Box sx={{ minWidth: 120 }} className="select_category_box">
          <FormControl fullWidth>
            <InputLabel className="select_label" id="demo-simple-select-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem className="select_category_menuItem" value="all">
                All
              </MenuItem>
              {allCategory.map((el, index) => (
                <MenuItem
                  className="select_category_menuItem"
                  value={el}
                  key={index}
                >
                  {el.split("")[0].toUpperCase() +
                    el.split("").slice(1).join("")}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <table className="table_table">
        <thead className="table_thead_row">
          <tr className="table_header_row">
            <th onClick={sortHandler}>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th className="table_id_th">Id</th>
            <th className="table_id_createdAt">Created At</th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody className="table_body_row_container">
          {category === "all"
            ? allProducts
                .slice(index, index + 9)
                .map((el, counter) => (
                  <SingleEdit key={el._id} el={el} index={counter + index} />
                ))
            : allProducts
                .filter((item) => item.category === category)
                .slice(index, index + 9)
                .map((el, counter) => (
                  <SingleEdit key={el._id} el={el} index={counter + index} />
                ))}
        </tbody>
      </table>
      <div className="table_page_container">
        <button
          onClick={prevHandler}
          aria-label="Prev Index"
          className="table_btn table_btn_prev"
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <ul>
          <li>
            {index + 1}-{index + 9 > catLength ? catLength : index + 9} Of{" "}
            {catLength} Items
          </li>
        </ul>
        <button
          onClick={nextHandler}
          aria-label="Next Index"
          className="table_btn table_btn_next"
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
