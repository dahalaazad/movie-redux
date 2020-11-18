import { createStore,configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/main";

const store = createStore(rootReducer);

export default function(){
    return configureStore({rootReducer});
}