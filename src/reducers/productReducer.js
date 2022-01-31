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
    case "PRODUCT_FOR_EDIT":
      return {
        products: action.payload,
        length: action.payload.length,
        productEditing: action.payload.filter(
          (el) => el._id === action.idLoad
        )[0],
      };
    default:
      return state;
  }
};

export default productReducer;
