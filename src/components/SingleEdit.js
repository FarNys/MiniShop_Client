import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteProduct } from "../actions/ProductAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
const SingleEdit = ({ el, index }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  //DELETE PRODUCT FROM DB
  const deleteHandler = () => {
    dispatch(deleteProduct(el._id));
    // console.log(el._id);
  };
  //EDIT PRODUCT FROM DB
  const editHandler = () => {
    history.push(`/edit/${el._id}`);
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{el.name}</td>
      <td>{el.category}</td>
      <td>${el.price}</td>
      <td className="table_id_th">{el._id}</td>
      <td className="table_id_createdAt">
        {new Date(el.mytimestamp).toLocaleString()}
      </td>
      <td className="table_edit_item">
        <AiFillEdit onClick={editHandler} />
      </td>
      <td className="table_delete_item">
        <AiFillDelete onClick={() => deleteHandler()} />
      </td>
    </tr>
  );
};

export default SingleEdit;
