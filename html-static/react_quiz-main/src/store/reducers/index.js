// Root Reducer

import { combineReducers } from "redux";
import authReducer from "./authReducer";

export let rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
