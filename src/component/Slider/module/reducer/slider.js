const fakeImg = [
  "./assets/images/zoomx-vaporfly-next-running-shoe-4Q5jfG.png",
  "./assets/images/zoom-fly-3-mens-running-shoe-XhzpPH.png",
  "./assets/images/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW.png",
  "./assets/images/air-max-alpha-tr-3-mens-training-shoe-0C1CV7.png",
];

const initialState = {
  slideList: [],
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SLIDELIST":
      state.slideList = action.payload.splice(0, fakeImg.length);
      state.slideList.forEach((item, index) => (item.img = fakeImg[index]));
      break;

    default:
      break;
  }
  return { ...state };
};

export default sliderReducer;
