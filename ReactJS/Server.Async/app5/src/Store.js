import { configureStore } from "@reduxjs/toolkit";
import ReddySlice from "./ReddySlice";
export const Store = configureStore({
  reducer: {
    users: ReddySlice,
  },
});
