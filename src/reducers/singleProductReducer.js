const initialState = {
  product: {
    _id: "",
    name: "",
    description: "",
    price: "",
  },
};
const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SINGLE_PRODUCT":
      return { ...state, product: action.payload };
    case "PRODUCT_FOR_EDIT":
      return { ...state, product: action.payload };
    case "PRODUCT_EDIT_DELETE":
      return {
        product: {
          _id: "",
          name: "",
          description: "",
          price: "",
        },
      };
    default:
      return state;
  }
};
export default singleProductReducer;
