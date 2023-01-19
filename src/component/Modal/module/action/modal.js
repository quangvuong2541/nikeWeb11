export const setModal = (isShow) => {
  return (dispatch) => {
    dispatch({
      type: "SET_MODAL",
      payload: isShow,
    });
  };
};
