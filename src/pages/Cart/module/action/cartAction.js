import API from "../../../../axios/API";

export const cartAction = (productDetail, token) => {
  return async (dispatch) => {
    try {
      const res = await API("cart/create", "POST", productDetail, token);

      console.log(res.data.newCart.products);

      dispatch({ type: "SET_CART", payload: res.data.newCart.products });
    } catch (err) {
      console.log(err);
    }
  };
};
