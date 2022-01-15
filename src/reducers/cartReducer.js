const initialState = {
  currentCart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const checkItem = state.currentCart.filter(
        (el) => el.item._id === action.payload._id
      );
      // console.log(checkItem);
      // localStorage.setItem("cart", JSON.stringify(action.payload));
      if (checkItem.length !== 1) {
        return {
          ...state,
          currentCart: [
            ...state.currentCart,
            { item: action.payload, count: 1 },
          ],
        };
      } else {
        return { ...state };
      }

    case "CHANGE_COUNT":
      return {
        ...state,
        currentCart: [
          ...state.currentCart.map((el) =>
            el.item._id === action.payload._id
              ? { item: el.item, count: +action.count }
              : el
          ),
        ],
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        currentCart: [
          ...state.currentCart.filter((el) => el.item._id !== action.payload),
        ],
      };

    default:
      return state;
  }
};

export default cartReducer;
