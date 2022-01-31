import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/EditProductPage.scss";
// import { editAction } from "../actions/ProductAction";
const EditProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const selectProduct = useSelector(
    (state) => state.singleProductReducer.product
  );
  const [editProduct, seteditProduct] = useState({});

  const editChangeHandler = (e) => {
    seteditProduct({ ...editProduct, [e.target.name]: e.target.value });
    console.log(editProduct);
  };

  const { id } = useParams();
  useEffect(() => {
    // dispatch(editAction(id));
    seteditProduct(location.state);
  }, [dispatch, id]);
  return (
    <div className="edit_page_container">
      {editProduct.name !== "" ? (
        <>
          <input type="text" value={editProduct._id || ""} disabled />
          <input
            type="text"
            value={editProduct.name || ""}
            name="name"
            onChange={(e) => editChangeHandler(e)}
          />
          <input
            type="text"
            name="price"
            value={editProduct.price || ""}
            onChange={(e) => editChangeHandler(e)}
          />
          <input
            type="text"
            name="description"
            value={editProduct.description || ""}
            onChange={(e) => editChangeHandler(e)}
          />
        </>
      ) : (
        <p>No Product</p>
      )}
    </div>
  );
};

export default EditProductPage;
