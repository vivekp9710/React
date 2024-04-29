import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../features/count/countSlice"
import amountReducer from "../features/amount/amountslice"

export const store = configureStore({
    reducer: {
        COUNT: countReducer,
        AMOUNT: amountReducer,
    },
});