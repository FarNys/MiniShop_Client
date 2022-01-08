export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const addTomyCart = (item) => {
  return { type: "ADD_TO_CART", payload: item };
};
