import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "../styles/EditProductPage.scss";
import { editAction } from "../actions/ProductAction";
const EditProductPage = () => {
  const dispatch = useDispatch();
  const selectProduct = useSelector(
    (state) => state.productReducer.productEditing
  );
  const [editProduct, seteditProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
  });
  const editChangeHandler = (e) => {
    seteditProduct({ ...editProduct, [e.target.name]: e.target.value });
    console.log(editProduct);
  };
  //   console.log(selectProduct);

  const { id } = useParams();
  useEffect(() => {
    dispatch(editAction(id));
  }, [dispatch, id]);
  return (
    <div className="edit_page_container">
      <h1>Edit: {id}</h1>
      {selectProduct !== null ? (
        <>
          <input type="text" value={selectProduct._id} disabled />
          <input
            type="text"
            value={
              editProduct.name !== "" ? editProduct.name : selectProduct.name
            }
            name="name"
            onChange={(e) => editChangeHandler(e)}
          />
          <input
            type="text"
            name="price"
            value={selectProduct.price}
            onChange={(e) => editChangeHandler(e)}
          />
          <input
            type="text"
            name="description"
            value={selectProduct.description}
            onChange={(e) => editChangeHandler(e)}
          />
          <p>{selectProduct.name}</p>
        </>
      ) : (
        <p>No Product</p>
      )}
    </div>
  );
};

export default EditProductPage;
