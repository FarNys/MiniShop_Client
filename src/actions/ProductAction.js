import { baseURL } from "../App";
//GET ALL PRODUCT FROM DB
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await fetch(`${baseURL}/products`);
    const data = await res.json();
    // console.log(data);
    dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const addTomyCart = (item) => {
  return { type: "ADD_TO_CART", payload: item };
};
//ADD PRODUCT TO DATABASE
export const sendData = (item) => async (dispatch) => {
  try {
    const result = await fetch(`${baseURL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: item.name,
        description: item.description,
        image: item.image,
        category: item.category,
        price: item.price,
        features: item.featuresArr,
      }),
    });

    const data = await result.json();
    // console.log(data);
    dispatch({ type: "SEND_DATA", payload: item });
  } catch (error) {
    console.log(error);
  }
};

//DELETE ONE PRODUCT FROM SHOP
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await fetch(`${baseURL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({ type: "DELETE_PRODUCT", payload: id });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
//GET SINGLE PRODUCT FOR DYNAMIC PAGE
export const getSingleProduct = (id) => async (dispatch) => {
  try {
    const res = await fetch(`${baseURL}/products/${id}`);
    const data = await res.json();
    console.log(data);
    dispatch({ type: "GET_SINGLE_PRODUCT", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const sortProducts = (state, sortName) => {
  return { type: "SORT_PRODUCTS", payload: state, sortName };
};
//GET SINGLE PRODUCT FOR EDIT PAGE
// export const editAction = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "PRODUCT_EDIT_DELETE" });
//     const res = await fetch(`${baseURL}/products/edit/${id}`);
//     const data = await res.json();
//     console.log(data);
//     dispatch({ type: "PRODUCT_FOR_EDIT", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
