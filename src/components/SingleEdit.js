import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteProduct } from "../actions/ProductAction";
import { useDispatch } from "react-redux";
const SingleEdit = ({ el, index }) => {
  const dispatch = useDispatch();
  //DELETE PRODUCT FROM DB
  const deleteHandler = () => {
    dispatch(deleteProduct(el._id));
    // console.log(el._id);
  };
  //EDIT PRODUCT FROM DB
  const editHandler = () => {
    console.log(`Edit ID:${el._id}`);
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{el.name}</td>
      <td>{el.category}</td>
      <td>${el.price}</td>
      <td>{el._id}</td>
      <td>{new Date(el.mytimestamp).toLocaleString()}</td>
      <td>
        <AiFillEdit onClick={editHandler} />
      </td>
      <td>
        <AiFillDelete onClick={() => deleteHandler()} />
      </td>
    </tr>
  );
};

export default SingleEdit;
