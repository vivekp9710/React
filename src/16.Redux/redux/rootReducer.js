import { amountReducer } from "./amount/reducer"
import { countReducer } from "./count/countReducer"
import { combineReducers } from "redux"
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
    AMOUNT: amountReducer,
    COUNT: countReducer,
    USER: userReducer
});