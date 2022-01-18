import { baseURL } from "../App";
//CART COUNTER HANDLER
export const counterHandler = (item, count) => {
  return { type: "CHANGE_COUNT", payload: item, count: count };
};
//DELETE PRODUCT FROM CART
export const deleteFromCart = (id) => {
  return { type: "DELETE_FROM_CART", payload: id };
};
