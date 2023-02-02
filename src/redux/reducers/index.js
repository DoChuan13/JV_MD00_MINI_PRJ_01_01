import { combineReducers } from "redux";

import listCart from "./reducerList/listCart";
import listProduct from "./reducerList/listProduct";
import notify from "./reducerList/notify";

const reducers = combineReducers({ listCart, listProduct, notify });

export default reducers;
