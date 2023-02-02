import { createStore } from "redux";
import reducers from "../reducers";

export const storeValue = createStore(reducers);
