import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./User.Slice"
export const Store=configureStore({
    reducer:{
       users:userReducer
    }
})