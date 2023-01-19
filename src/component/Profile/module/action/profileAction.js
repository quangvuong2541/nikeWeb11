import API from "../../../../axios/API";

export const profileAction = (body, token, navigate) => {
  return async (dispatch) => {
    try {
      console.log(body, token);
      const res = await API("users/update", "PUT", body, token);

      const dataLogin = {
        email: body.email,
        password: body.password,
      };

      const resLogin = await API("users/login", "POST", dataLogin);
      dispatch({ type: "SET_USER_INFO", payload: resLogin.data });

      localStorage.setItem("user", JSON.stringify(resLogin.data));

      alert(res.data.messager);

      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
};
