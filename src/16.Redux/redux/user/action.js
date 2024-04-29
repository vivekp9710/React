import { ADD_USER, GET_FROM_LOCAL } from "./constant"


export const addUser = (data) => {
    return { type: ADD_USER, payload: data };
}
export const getfromLocal = (data) => {
    return { type: GET_FROM_LOCAL };
}