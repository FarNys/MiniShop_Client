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
    case "SORT_PRODUCTS":
      return {
        ...state,
        products: [
          ...state.products.sort((a, b) => {
            const x = a[action.sortName];
            const y = b[action.sortName];
            if (action.payload) {
              if (x > y) {
                return -1;
              }
              if (x < y) {
                return +1;
              }
              return 0;
            } else {
              if (x > y) {
                return +1;
              }
              if (x < y) {
                return -1;
              }
              return 0;
            }
          }),
        ],
      };
    default:
      return state;
  }
};

export default productReducer;
