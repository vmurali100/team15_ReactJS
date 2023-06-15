import { configureStore } from '@reduxjs/toolkit'
import EditReducer from "./Edit.Slice"
export const Store=configureStore({
    reducer:{
       users:EditReducer
    }
})

