const initialState = {
  product: null,
};
const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SINGLE_PRODUCT":
      return { ...state, product: action.payload };

    default:
      return state;
  }
};
export default singleProductReducer;
