import { ADD_USER, GET_FROM_LOCAL } from "./constant";

export const userReducer = (state = [{ name: "marvik", age: 10 }], action) => {
    console.log("action", action);
    switch (action.type) {
        case ADD_USER:
            let data = [...state, action?.payload];
            localStorage.setItem("userData", JSON.stringify(data));
            return data;
        case GET_FROM_LOCAL:
            let datafromlocal = localStorage.getItem("userData")
            return JSON.parse(datafromlocal);
        default:
            break;
    }
    return state;
};