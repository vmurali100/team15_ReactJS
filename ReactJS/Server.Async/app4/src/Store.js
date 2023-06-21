import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./UserSlice"
export const Store = configureStore({
  reducer: {
    users: useReducer,
  },
});
