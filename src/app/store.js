import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "../features";

const store =configureStore({
    reducer:RootReducers
});
export default store;