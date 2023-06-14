import { configureStore } from "@reduxjs/toolkit";
import fromReducer from "./From.Slice"

export const Store=configureStore({
    reducer:{
        users:fromReducer
    }
})