import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "../../src/component/ProductList/module/reducer/productReducer";
import sliderReducer from "../component/Slider/module/reducer/slider";
import modalReducer from "../component/Modal/module/reducer/modalReducer";
import { cartReducer } from "../pages/Cart/module/reducer/cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productReducer,
  sliderReducer,
  modalReducer,
  cartReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
