import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./userSlice";
export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
