import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User.Slice";
export const Store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
