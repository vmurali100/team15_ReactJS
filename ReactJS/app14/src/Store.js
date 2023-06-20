import { configureStore } from "@reduxjs/toolkit";
import  usersReducer  from "./Usersslice";
export const store = configureStore({
    reducer:{
        users:usersReducer
    }
})