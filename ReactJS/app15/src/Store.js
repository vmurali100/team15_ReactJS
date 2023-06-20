import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice";
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
