import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../actions/ProductAction";
const DynamicProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getProduct = useSelector((state) => state.singleProductReducer.product);
  console.log(getProduct);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);
  return (
    <div>
      <h1>dynamicId :{id}</h1>
      {getProduct && <li>{getProduct.name}</li>}
    </div>
  );
};

export default DynamicProduct;
