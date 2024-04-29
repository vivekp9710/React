import { createStore } from "redux";
import { countReducer } from "./count/countReducer";
import { rootReducer } from "./rootreducer";

export const store = createStore(rootReducer)   