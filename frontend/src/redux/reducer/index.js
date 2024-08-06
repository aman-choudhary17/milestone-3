import handleCart from './handleCart'
import handleItem from './handleItem';
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart,
    handleItem,
})
export default rootReducers