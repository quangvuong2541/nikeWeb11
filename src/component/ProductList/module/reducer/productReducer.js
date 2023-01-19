const fakeImg = [
  "./assets/images/zoomx-vaporfly-next-running-shoe-4Q5jfG(3).jpg",
  "./assets/images/zoom-fly-3-mens-running-shoe-XhzpPH(3).jpg",
  "./assets/images/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW(3).jpg",
  "./assets/images/air-max-alpha-tr-3-mens-training-shoe-0C1CV7(3).jpg",
  "./assets/images/zoom-fly-3-mens-running-shoe-XhzpPH(1).jpg",
  "./assets/images/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW(1).jpg",
];

const initialState = {
  productList: [],
  productDetail: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTLIST":
      state.productList = action.payload;
      state.productList.forEach((item, index) => {
        const newIndex =
          index - fakeImg.length * Math.floor(index / fakeImg.length);
        item.img = fakeImg[newIndex];
      });
      break;

    case "SET_PRODUCTDETAIL":
      state.productDetail = action.payload;
      break;
    default:
      break;
  }

  return { ...state };
};

export default productReducer;
