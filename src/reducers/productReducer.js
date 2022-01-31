const initialState = {
  products: [],
  length: 0,
  productEditing: null,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        products: action.payload,
        length: action.payload.length,
        productEditing: null,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: [...state.products.filter((el) => el._id !== action.payload)],
      };

    default:
      return state;
  }
};

export default productReducer;
