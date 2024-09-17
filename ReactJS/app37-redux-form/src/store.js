import { configureStore } from '@reduxjs/toolkit'
import VaniReducer from "./Vani.Slice"
export const store=configureStore({
    reducer:{
        users:VaniReducer
    }
})