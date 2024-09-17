import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "./Dilli.Slice"
export const store=configureStore({
    reducer:{
      users:usersReducer
    }
})