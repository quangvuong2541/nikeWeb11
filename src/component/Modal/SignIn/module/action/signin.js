import API from "../../../../../axios/API";

export const login = (body) => {
  return async (dispatch) => {
    try {
      const res = await API(`users/login`, "POST", body);
      console.log(res.data);

      localStorage.setItem("user", JSON.stringify(res.data));

      dispatch({ type: "SET_USER_INFO", payload: res.data });
      
      alert(res.data.messager);

      dispatch({ type: "SET_MODAL", payload: false });
    } catch (err) {
      console.log(err);
    }
  };
};
