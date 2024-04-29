import { createSlice } from "@reduxjs/toolkit";

const initialState = { amount: 0 };
let amountSlice = createSlice({
    name: "amount", initialState, reducers: {
        incrementByValue: (state, action) => {
            state.amount += action.payload;
        },
    },
});

export default amountSlice.reducer
export const { incrementByValue } = amountSlice.actions