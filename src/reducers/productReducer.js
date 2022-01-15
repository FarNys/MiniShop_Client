const initialState = {
  products: [],
  length: 0,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { products: action.payload, length: action.payload.length };

    default:
      return state;
  }
};

export default productReducer;
