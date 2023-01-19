const userLocal = JSON.parse(localStorage.getItem("user"));

const initialState = {
  showModal: false,
  userInfo: userLocal,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODAL":
      state.showModal = action.payload;
      break;
    case "SET_USER_INFO":
      state.userInfo = action.payload;
      break;

    default:
      break;
  }
  return { ...state };
};

export default modalReducer;
