import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./mouniSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
