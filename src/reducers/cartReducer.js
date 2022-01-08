const initialState = {
  currentCart: [],
  total: 0,
};
let x;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const checkItem = state.currentCart.filter(
        (el) => el.item._id === action.payload._id
      );
      console.log(checkItem);
      if (checkItem.length > 0) {
        return {
          ...state,
          currentCart: [
            ...state.currentCart.map((el) =>
              el.item._id === action.payload._id
                ? { item: el.item, count: el.count + 1 }
                : el
            ),
          ],

          total: state.currentCart.reduce((total, cur) => {
            return total + +cur.item.price * +cur.count;
          }, 0),
        };
      } else {
        return {
          ...state,
          currentCart: [
            ...state.currentCart,
            { item: action.payload, count: 1 },
          ],
          total: state.currentCart.reduce((total, cur) => {
            return total + +cur.item.price * +cur.count;
          }, 0),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
