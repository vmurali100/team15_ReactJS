import { configureStore } from '@reduxjs/toolkit'
import userSlice from './UserSlice'
export const Store=configureStore({
    reducer:{
users:userSlice
    }
})