import { configureStore } from '@reduxjs/toolkit'
import RadhaSlice from './Radha.Slice'
export const store=configureStore({
    reducer:{
        users:RadhaSlice
    }
})