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
    console.log(data);
    dispatch({ type: "SEND_DATA", payload: item });
  } catch (error) {
    console.log(error);
  }
};
