import API from "../../../../axios/API";

export const getSlideList = (gender, typeProduct) => {
  return async (dispatch) => {
    try {
      const res = await API(
        `product?gender=${gender}&typeProduct=${typeProduct}`,
        "GET"
      );
      dispatch({
        type: "SET_SLIDELIST",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
