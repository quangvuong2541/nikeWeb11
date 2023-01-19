const cartLocal = JSON.parse(localStorage.getItem("cartItem"));

const initialState = {
  cart: cartLocal || [],
};

const checkDuplicate = (cart, payload) => {
  cart.forEach((item) => {
    if (
      item._id === payload._id &&
      item.size === payload.size &&
      item.color === payload.color
    ) {
      return item;
    }
  });
  return null;
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART":
      let cloneCart = [...state.cart];
      cloneCart = action.payload;
      localStorage.setItem("cartItem", JSON.stringify(cloneCart));
      const newItem = checkDuplicate(cloneCart, action.payload);
      if (newItem) {
        console.log(newItem);
        newItem.quantity += 1;
      } else {
        cloneCart = [...cloneCart, action.payload];
      }
      state.cart = cloneCart;
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
      break;

    default:
      break;
  }

  return { ...state };
};
