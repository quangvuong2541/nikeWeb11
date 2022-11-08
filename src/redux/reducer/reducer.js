import { combineReducers } from "redux";
import reducerCart from "../../components/Cart /Module/Reducer/reducer";
import reducerURL from "../../components/ListProduct/module/reducer/reducer"

const rootReducer = combineReducers({
    reducerURL,
    reducerCart
})
export default rootReducer