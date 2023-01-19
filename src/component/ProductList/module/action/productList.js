import API from "../../../../axios/API";

export const getProductList = (gender, typeProduct) => {
  return async (dispatch) => {
    try {
      const res = await API(
        `product?gender=${gender}&typeProduct=${typeProduct}`,
        "GET"
      );
      dispatch({
        type: "SET_PRODUCTLIST",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetail = (idProduct) => {
  return async (dispatch) => {
    try {
      const res = await API(`product/${idProduct}`, "GET");
    } catch (err) {
      console.log(err);
    }
  };
};
