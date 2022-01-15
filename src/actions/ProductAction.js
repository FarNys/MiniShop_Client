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
export const sendData = (item) => async (dispatch) => {
  try {
    const result = await fetch("http://localhost:5000/products", {
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
export const counterHandler = (item, count) => {
  return { type: "CHANGE_COUNT", payload: item, count: count };
};
export const deleteFromCart = (id) => {
  return { type: "DELETE_FROM_CART", payload: id };
};
//NOT DEFINED YET!
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({ type: "DELETE_PRODUCT", payload: id });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const getSingleProduct = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    console.log(data);
    dispatch({ type: "GET_SINGLE_PRODUCT", payload: data });
  } catch (error) {
    console.log(error);
  }
};
