import React, { useEffect, useState } from "react";
import { getAllProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import SingleEdit from "../components/SingleEdit";
const AllProducts = () => {
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  //GET ALL PRODUCTS FROM STORE
  const allProducts = useSelector((state) => state.productReducer.products);
  //CREATE NEW SET OF CATEGORIES
  const getAllCategory = allProducts.map((el) => el.category);
  const allCategory = [...new Set(getAllCategory)];
  //HANDLE CATEGORY
  const categoryHandler = (e) => {
    setcategory(e.target.value);
  };
  //GET ALL PRODUCTS FROM DB
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  if (allProducts.length === 0) {
    return <div>Loading . . .</div>;
  }
  return (
    <div>
      <div>
        <select name="category" id="category" onChange={categoryHandler}>
          <option value="all">All</option>
          {allCategory.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Id</th>
            <th>Created At</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {category === "all"
            ? allProducts.map((el, index) => (
                <SingleEdit key={el._id} el={el} index={index} />
              ))
            : allProducts
                .filter((item) => item.category === category)
                .map((el, index) => (
                  <SingleEdit key={el._id} el={el} index={index} />
                ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
